import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR("/api/get-promo", fetcher);

  return (
    <div>
      <PageTitle title="Seja bem-bindo!" />
      <p className="mt-6 text-center ">Qual o nome voce deseja pesquisar?</p>
      <div className="text-center my-12">
        <Link href="/pesquisa">
          <a className="bg-blue-400 px-6 py-4 font-bold rounded-ld shadow-lg">
            Dar opnião ou sugestão
          </a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon && (
        <p className="mt-12 text-center">{data.message}</p>
      )}
    </div>
  );
};

export default Index;
