
const buildEmail = ({ name, email, message }) => {
  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'iranjuniordev@gmail.com',
    subject: 'Oba tem mensagem para você do seu site',
    text: 'Iran, uma mensagem foi enviada para você do seu site, veja :',
    html: `<b>Olá, sou ${name} </b>
    <br /> 
    <span>
       Fui no seu site e deixei essa mensagem para você:
    </span>
    <br />
    <p style="font-style: italic;max-width: 500px;">
        ${message}
    </p>
    <br />
    
    <label>Não esqueca de responder a ${name} atraves do email: ${email}</label>`,
  };


  return mailOptions;
};

module.exports = buildEmail;
