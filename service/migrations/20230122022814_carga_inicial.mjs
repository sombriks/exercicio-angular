const perfis = [
    {id: 1, nome: "admin"},
    {id: 2, nome: "advogado"},
    {id: 3, nome: "procurador"},
    {id: 4, nome: "estagiário"},
]

const pessoas = [
    {id: 1, perfis_id: 1, senha: "", nome: "admin"},
    {id: 2, perfis_id: 2, senha: "", nome: "Matheus"},
    {id: 3, perfis_id: 2, senha: "", nome: "Marcos"},
    {id: 4, perfis_id: 3, senha: "", nome: "Lucas"},
    {id: 5, perfis_id: 4, senha: "", nome: "João"},
]

const setores = [
    {id: 1, nome: "trabalhista"},
    {id: 2, nome: "civil"},
    {id: 3, nome: "penal"},
];

const varas = [
    {id: 1, setores_id: 1, nome: "vara do trabalho"},
    {id: 2, setores_id: 2, nome: "vara civil 1"},
    {id: 3, setores_id: 2, nome: "vara civil 2"},
    {id: 4, setores_id: 3, nome: "vara penal 1"},
];

const gabinetes = [
    {id: 1, varas_id: 1, nome: "vara do trabalho gabinete 1"},
    {id: 2, varas_id: 1, nome: "vara do trabalho gabinete 2"},
    {id: 3, varas_id: 2, nome: "vara civil 1 gabinete 1"},
    {id: 4, varas_id: 3, nome: "vara civil 2 gabinete 1"},
    {id: 5, varas_id: 4, nome: "vara penal 1 gabinete 1"},
    {id: 6, varas_id: 3, nome: "vara civil 2 gabinete 2"},
];

const lotacoes = [
    {pessoas_id: 2, gabinetes_id: 1},
    {pessoas_id: 3, gabinetes_id: 2},
    {pessoas_id: 4, gabinetes_id: 2},
    {pessoas_id: 5, gabinetes_id: 5},
];

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    await knex("perfis").insert(perfis);
    await knex("pessoas").insert(pessoas);
    await knex("setores").insert(setores);
    await knex("varas").insert(varas);
    await knex("gabinetes").insert(gabinetes);
    return knex("lotacoes").insert(lotacoes);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
    await knex("lotacoes").del();
    await knex("gabinetes").del();
    await knex("varas").del();
    await knex("setores").del();
    await knex("pessoas").del();
    return knex("perfis").del();
};
