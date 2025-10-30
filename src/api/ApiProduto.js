import axios from "axios";

let url = "http://10.0.2.2:3000/api";

const getProduto = async () => {
  try {
    const fullUrl = `${url}/produto`;
    const response = await axios.get(fullUrl);

    return response.data;
  } catch (error) {
    console.log("Erro ao consumir API de todos os produtos:", error);
    throw error;
  }
};

const getProdutoId = async (id) => {
  try {
    const fullUrl = `${url}/produto/${id}`;

    const response = await axios.get(fullUrl);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`Erro ao consumir API do produto ${id}:`, error);
    throw error;
  }
};

export { getProduto, getProdutoId }; // Exporta as funções com nome
