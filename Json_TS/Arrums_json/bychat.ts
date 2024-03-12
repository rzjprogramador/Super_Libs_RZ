
import { readJson, writeJson } from 'https://deno.land/x/jsonfile/mod.ts';

const filePath = './data.json';

// Função para ler dados JSON do arquivo
const readData = async () => {
  try {
    return await readJson(filePath);
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    throw error;
  }
};

// Função para escrever dados JSON no arquivo
const writeData = async (jsonData: any) => {
  try {
    await writeJson(filePath, jsonData, { spaces: 2 });
    console.log('Dados JSON escritos no arquivo:', filePath);
  } catch (error) {
    console.error('Erro ao escrever no arquivo JSON:', error);
    throw error;
  }
};

// Exemplo de como adicionar um novo elemento ao array
const addNewItem = async () => {
  try {
    const jsonData = await readData();

    // Novo item a ser adicionado
    const newItem = { name: 'Alice', age: 25 };

    // Adicionando o novo item ao array
    jsonData.push(newItem);

    // Escrevendo os dados atualizados de volta ao arquivo
    await writeData(jsonData);
  } catch (error) {
    console.error('Erro ao adicionar novo item:', error);
  }
};

// Exemplo de como remover um item do array
const removeItem = async (index: number) => {
  try {
    const jsonData = await readData();

    // Removendo o item no índice fornecido
    jsonData.splice(index, 1);

    // Escrevendo os dados atualizados de volta ao arquivo
    await writeData(jsonData);
  } catch (error) {
    console.error('Erro ao remover item:', error);
  }
};

// Exemplo de como modificar um item no array
const modifyItem = async (index: number, modifiedData: any) => {
  try {
    const jsonData = await readData();

    // Modificando o item no índice fornecido
    jsonData[index] = modifiedData;

    // Escrevendo os dados atualizados de volta ao arquivo
    await writeData(jsonData);
  } catch (error) {
    console.error('Erro ao modificar item:', error);
  }
};

// Exemplos de uso
addNewItem();
// removeItem(1);  // Descomente e forneça o índice se quiser remover um item
// modifyItem(0, { name: 'Bob', age: 28 });  // Descomente e forneça o índice e os dados modificados

/*
pesquisa no chat:  manipular array json em deno js

Para manipular um array em um arquivo JSON usando o Deno, você pode seguir uma abordagem semelhante às fornecidas anteriormente. Vamos considerar um cenário onde você deseja adicionar, remover ou modificar elementos em um array JSON em um arquivo. Aqui está um exemplo que cobre essas operações básicas:
*/