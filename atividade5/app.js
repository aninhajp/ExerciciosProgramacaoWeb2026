const express = require('express');

const app = express();

const PORT = 8080;

let dadosAgendamento = null;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', { erros: [], dados: {} });
});

app.post('/', function (req, res) {

    const nome = req.body.nome || '';
    const sobrenome = req.body.sobrenome || '';
    const cpf = req.body.cpf || '';
    const nascimento = req.body.nascimento || '';
    const telefone = req.body.telefone || '';
    const cep = req.body.cep || '';
    const endereco = req.body.endereco || '';
    const clinica = req.body.clinica || '';
    const especialidade = req.body.especialidade || '';
    const data = req.body.data || '';
    const hora = req.body.hora || '';
    const observacao = req.body.observacao || '';

    const erros = [];


    if (nome.trim() === '') {
        erros.push({ campo: 'nome', mensagem: 'O campo Nome é obrigatório.' });
    }
    if (sobrenome.trim() === '') {
        erros.push({ campo: 'sobrenome', mensagem: 'O campo Sobrenome é obrigatório.' });
    }
    if (cpf.trim() === '') {
        erros.push({ campo: 'cpf', mensagem: 'O campo CPF é obrigatório.' });
    }
    if (nascimento.trim() === '') {
        erros.push({ campo: 'nascimento', mensagem: 'O campo Data de Nascimento é obrigatório.' });
    }
    if (telefone.trim() === '') {
        erros.push({ campo: 'telefone', mensagem: 'O campo Telefone é obrigatório.' });
    }
    if (cep.trim() === '') {
        erros.push({ campo: 'cep', mensagem: 'O campo CEP é obrigatório.' });
    }
    if (endereco.trim() === '') {
        erros.push({ campo: 'endereco', mensagem: 'O campo Endereço é obrigatório.' });
    }
    if (clinica.trim() === '') {
        erros.push({ campo: 'clinica', mensagem: 'O campo Clínica é obrigatório.' });
    }
    if (especialidade.trim() === '') {
        erros.push({ campo: 'especialidade', mensagem: 'O campo Especialidade é obrigatório.' });
    }
    if (hora.trim() === '') {
        erros.push({ campo: 'hora', mensagem: 'O campo Hora é obrigatório.' });
    }

    if (data.trim() === '') {
        erros.push({ campo: 'data', mensagem: 'O campo Data do Agendamento é obrigatório.' });
    } else {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        const dataAgendamento = new Date(data + 'T00:00:00');

        if (dataAgendamento <= hoje) {
            erros.push({ campo: 'data', mensagem: 'A data do agendamento deve ser posterior à data de hoje.' });
        }
    }

    if (erros.length > 0) {
        const dados = { nome, sobrenome, cpf, nascimento, telefone, cep, endereco, clinica, especialidade, data, hora, observacao };
        return res.render('index', { erros: erros, dados: dados });
    }

    const agendamento = { nome, sobrenome, cpf, nascimento, telefone, cep, endereco, clinica, especialidade, data, hora, observacao };

    dadosAgendamento = agendamento;
    res.redirect('/agendamento');
});

app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});

app.get('/agendamento', function (req, res) {
    if (!dadosAgendamento) {
        return res.redirect('/');
    }

    res.render('agendamento', { agendamento: dadosAgendamento });
});
