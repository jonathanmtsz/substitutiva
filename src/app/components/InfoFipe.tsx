
import React, { useState, useEffect } from 'react';

interface InfoFipeProps {
  codigoFipe: string;
}

interface FipeInfo {
    valor: string;
    marca: string;
    modelo: string;
    anoModelo: number;
    combustivel: string;
    codigoFipe: string;
    mesReferencia: string;
    tipoVeiculo: number;
    siglaCombustivel: string;
    dataConsulta: string;
  }

function InfoFipe({ codigoFipe }: InfoFipeProps) {
  const [data, setData] = useState<FipeInfo | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (codigoFipe) {
      setLoading(true);
      fetch(`https://brasilapi.com.br/api/fipe/preco/v1/${codigoFipe}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [codigoFipe]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Nenhum carro encontrado</p>;
  if(data.message != null){
    return (
        <div>
        <h1>Nenhum carro encontrado</h1>
        </div>
    );
  }
    
}

export default InfoFipe;