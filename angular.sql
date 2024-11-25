CREATE DATABASE controle_colecao;
USE controle_colecao;

CREATE TABLE pastas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pasta_id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(50),
    ano_aquisicao YEAR,
    quantidade INT DEFAULT 1,
    data_adicionado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pasta_id) REFERENCES pastas(id) ON DELETE CASCADE
);
DELETE FROM pastas WHERE id < 12;
SELECT * FROM pastas;

SELECT 
    p.id AS pasta_id,
    p.nome AS pasta_nome,
    p.descricao AS pasta_descricao,
    p.data_criacao AS pastadata_criacao,
    i.id AS item_id,
    i.nome AS item_nome,
    i.descricao AS item_descricao,
    i.categoria AS item_categoria,
    i.ano_aquisicao AS item_ano_aquisicao,
    i.quantidade AS item_quantidade,
    i.data_adicionado AS item_data_adicionado
FROM 
    pastas p
LEFT JOIN 
    itens i ON p.id = i.pasta_id
WHERE 
    p.id = 12; -- Substitua "1" pelo ID da pasta que deseja consultar



-- Inserir uma nova pasta
INSERT INTO pastas (nome, descricao)
VALUES ('Coleção de Livros', 'Livros favoritos de ficção científica');

-- Obter o ID da pasta recém-inserida
SET @pasta_id = LAST_INSERT_ID();

-- Inserir dois itens associados à pasta
INSERT INTO itens (pasta_id, nome, descricao, categoria, ano_aquisicao, quantidade)
VALUES 
(@pasta_id, 'Duna', 'Livro clássico de ficção científica', 'Livro', 1965, 1),
(@pasta_id, 'Neuromancer', 'Romance pioneiro do cyberpunk', 'Livro', 1984, 1);


-- Inserir uma nova pasta
INSERT INTO pastas (nome, descricao)
VALUES ('Coleção de Filmes', 'Filmes favoritos de ficção científica');

-- Obter o ID da pasta recém-inserida
SET @pasta_id = LAST_INSERT_ID();

-- Inserir dois itens associados à pasta
INSERT INTO itens (pasta_id, nome, descricao, categoria, ano_aquisicao, quantidade)
VALUES 
(@pasta_id, 'Blade Runner', 'Filme clássico de ficção científica', 'Filme', 1982, 1),
(@pasta_id, 'Matrix', 'Filme revolucionário de ficção científica', 'Filme', 1999, 1);
