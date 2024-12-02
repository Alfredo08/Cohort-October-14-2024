const pool = require('./../database/config');

const getAll = () => {
    const nativeQuery = `
        SELECT *
        FROM pets;
    `;
    return pool.query(nativeQuery);
}

const createOne = (data) => {
    const nativeQuery = `
        INSERT INTO pets(name, species, breed, user_id)
        VALUES($1, $2, $3, $4) RETURNING *;
    `;
    return pool.query(nativeQuery, data)
}

const deleteOne = (data) => {
    const nativeQuery = `
        DELETE FROM pets
        WHERE id = $1;
    `;
    return pool.query(nativeQuery, data);
}

const Pets = {
    getAll,
    createOne,
    deleteOne
};

module.exports = Pets;