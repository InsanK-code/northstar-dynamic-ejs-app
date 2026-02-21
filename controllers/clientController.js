
const clients = require('../data/clients.json');

exports.getHome = (req, res) => {
    res.render('pages/home', { title: 'Home' });
};

exports.getClients = (req, res) => {
    res.render('pages/clients', { title: 'Client List', clients });
};

exports.getClientDetails = (req, res) => {
    const client = clients.find(c => c.id == req.params.id);
    if (!client) {
        return res.status(404).send('Client not found');
    }
    res.render('pages/clientDetails', { title: 'Client Details', client });
};
