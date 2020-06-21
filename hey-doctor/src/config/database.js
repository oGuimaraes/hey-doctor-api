module.exports = {
  dialect: 'postgres',
  host: "192.168.99.100",
  username: 'postgres',
  password: 'heydoctor',
  database: 'heydoctor',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}