import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const genCupom = () => {
  const code = parseInt(moment().format("DDMMYYHHmmssSSS"))
    .toString(16)
    .toUpperCase();
  return code.substr(0, 4) + "-" + code.substr(4, 4) + "-" + code.substr(8, 4);
};
export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY,
    });
    await doc.loadInfo();

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A2:B2");
    const mostrarPromocaoCell = sheetConfig.getCell(1, 0);
    const textoCell = sheetConfig.getCell(1, 1);
    let Cupom = "";
    let Promo = "";
    if (mostrarPromocaoCell.value == "VERDADEIRO") {
      Cupom = genCupom();
      Promo = textoCell.value;
    }

    const sheet = doc.sheetsByIndex[1];

    // Nome	E-mail	WhatsApp	Cupom	Promo
    const data = JSON.parse(req.body);

    const body = {
      Nome: data.Nome,
      Email: data.Email,
      WhatsApp: data.WhatsApp,
      Cupom,
      Promo,
      "Data Preenchimento": moment().format("DD/MM/YYYY HH:mm:ss"),
      Nota: parseInt(data.Nota),
    };
    await sheet.addRow(body);
    res.end(JSON.stringify({ showCoupon: Cupom != "", Cupom, Promo }));
  } catch (error) {
    console.log(error);
    res.end(error);
  }
};
