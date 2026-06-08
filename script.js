let tamanhoFonte = 18;

function mostrarTela(tipo){

  const screen =
  document.getElementById("screen");

  

  if(tipo === "inicio"){

    screen.innerHTML = `
      <h2>👋 Bem-vindo</h2>

      <p>
      Este aplicativo foi criado para auxiliar idosos
      no uso da tecnologia de forma acessível e segura.
      </p>

      <p>
      Navegue pelos menus para acessar os conteúdos educativos.
      </p>
    `;
  }

  

  if(tipo === "whatsapp"){

    screen.innerHTML = `
      <h2>💬 Como usar o WhatsApp</h2>

      <p>1. Abra o aplicativo WhatsApp.</p>

      <p>2. Escolha um contato.</p>

      <p>3. Digite sua mensagem.</p>

      <p>4. Clique na seta verde para enviar.</p>

      <p>5. Segure o microfone para enviar áudio.</p>
    `;
  }

  
  if(tipo === "video"){

    screen.innerHTML = `
      <h2>🎥 Vídeo Chamada</h2>

      <p>1. Abra o WhatsApp.</p>

      <p>2. Escolha o contato desejado.</p>

      <p>3. Clique no ícone de câmera.</p>

      <p>4. Aguarde a chamada iniciar.</p>

      <p>5. Utilize internet Wi-Fi para melhor qualidade.</p>
    `;
  }



  if(tipo === "seguranca"){

    screen.innerHTML = `
      <h2>🔒 Segurança Digital</h2>

      <p>• Nunca compartilhe senhas.</p>

      <p>• Utilize senhas fortes.</p>

      <p>• Evite clicar em links desconhecidos.</p>

      <p>• Mantenha aplicativos atualizados.</p>
    `;
  }

 

  if(tipo === "golpes"){

    screen.innerHTML = `
      <h2>⚠️ Golpes Digitais</h2>

      <p>• Bancos não pedem senha por WhatsApp.</p>

      <p>• Nunca envie dinheiro sem confirmar.</p>

      <p>• Não compartilhe códigos SMS.</p>

      <p>• Desconfie de mensagens urgentes.</p>

      <p>• Peça ajuda para familiares em caso de dúvida.</p>
    `;
  }



  if(tipo === "emergencia"){

    screen.innerHTML = `
      <h2>🆘 Contato Rápido</h2>

      <p>
      Utilize os botões abaixo para entrar em contato.
      </p>

      <div class="buttons-contact">

        <button onclick="ligarEmergencia()">
          📞 Ligar 192
        </button>

        <button onclick="abrirWhatsapp()">
          💬 Abrir WhatsApp
        </button>

      </div>
    `;
  }



  if(tipo === "wifi"){

    screen.innerHTML = `
      <h2>📶 Como conectar no Wi-Fi</h2>

      <p>1. Abra as configurações do celular.</p>

      <p>2. Clique em Wi-Fi.</p>

      <p>3. Escolha sua rede.</p>

      <p>4. Digite a senha.</p>

      <p>5. Clique em conectar.</p>
    `;
  }

 

  if(tipo === "icones"){

    screen.innerHTML = `
      <h2>📲 Ícones do Celular</h2>

      <p>📞 = Ligações</p>

      <p>📷 = Câmera</p>

      <p>⚙️ = Configurações</p>

      <p>🌐 = Internet</p>

      <p>💬 = Conversas e mensagens</p>
    `;
  }

  atualizarFonte();
}



function aumentarFonte(){

  tamanhoFonte += 2;

  atualizarFonte();
}

function diminuirFonte(){

  if(tamanhoFonte > 14){

    tamanhoFonte -= 2;
  }

  atualizarFonte();
}

function atualizarFonte(){

  const screen =
  document.getElementById("screen");

  screen.style.fontSize =
  tamanhoFonte + "px";
}



function lerTexto(){

  const texto =
  document.getElementById("screen").innerText;

  const fala =
  new SpeechSynthesisUtterance(texto);

  fala.lang = "pt-BR";

  speechSynthesis.speak(fala);
}



function ligarEmergencia(){

  window.location.href = "tel:192";
}

function abrirWhatsapp(){

  window.open(
    "https://wa.me/5541999999999",
    "_blank"
  );
}