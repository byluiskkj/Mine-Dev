import React from 'react'
import './Home.css'

const Home = () => {
    return (
      
      <header>

        <div class="navbar">
          <div class="conteúdo interno do cabeçalho">
            <h1 class="logo">Mine <span>Dev</span></h1>
            <nav>
              <ul>
                <li><a href="">Sobre nosso site!</a></li>
                <li><a href="">Contato!</a></li>
                <li><a href="">Somos confiaveis!?</a></li>
              </ul>
            </nav>
            <div class="nav-img-container">
              <img src="/src/assets/cart.png" alt="IMAGEM DO CART!" />
              <img class="" src="./src/assets/menu.png" alt="IMAGEM DO MENU!" />
            </div>
          </div>
        </div>
        <div class="container">
        <div class="card card1">
            <img src="./src/assets/imagem(Capa Optifine).png" alt="" />
            <h1>Minecraft Full Acesso</h1>
            <p> NOVIDADE: 90% de chance de ter a Capa Creeper (Aniversário 15
                anos), Capa Twitch (Purple Heart) & Capa Tiktok (Follower’s)
                (Capas do Aniversário de 15 anos)
                <br />
                Minecraft Java Edition e Bedrock Edition
                (Altera E-mail, Senha, Nick e Skin) Ativação diretamente em seu email
                <br />
                Acesso permanente e completo à todas as funções
                (Alteração de dados e a todos os servidores originais) 
                <br />
                Acesso oficial e privado a versão Java & Bedrock EXCLUSIVO: 50% de chance
                de ter a Migrator Cape, Vanilla Cape, Cherry Blossom Cape e/ou MCC
                15th Year Cape (Capas oficiais)
                <br />
                Chance de ter Rank no Hypixel (VIP, VIP+, MVP, MVP+)
                Chance de ter Cosméticos no Lunar ou Badlion
            </p>
                <button class="btn-1"> Comprar - R$ 70,00 </button>
        </div>
        <div class="card card2">
            <img src="./src/assets/Imagem(Contas Full Acesso).png" alt="" />
            <h1>blablabla</h1>
            <p> NOVIDADE: 90% de chance de ter a Capa Creeper (Aniversário 15
                anos), Capa Twitch (Purple Heart) & Capa Tiktok (Follower’s)
                (Capas do Aniversário de 15 anos)
                <br />
                Minecraft Java Edition e Bedrock
                Edition (Altera E-mail, Senha, Nick e Skin)
                <br />
                Ativação diretamente em seu e-mail
                <br />
                Acesso permanente e completo à todas as funções
                (Alteração de dados e a todos os servidores originais) 
                <br />
                Acesso oficial e privado a versão Java & Bedrock EXCLUSIVO: 50% de chance
                de ter a Migrator Cape, Vanilla Cape, Cherry Blossom Cape e/ou MCC
                15th Year Cape (Capas oficiais)
                <br />
                Chance de ter Rank no Hypixel (VIP, VIP+, MVP, MVP+)
                Chance de ter Cosméticos no Lunar ou Badlion
                </p>
            <button class="btn-2"> Comprar - R$ 70,00 </button>

        </div>
        <div class="card card3">
            <img src="./src/assets/imagem(Contas semi-acesso).png" alt="" />
            <h1>blablabla</h1>
            <p> NOVIDADE: 90% de chance de ter a Capa Creeper (Aniversário 15
                anos), Capa Twitch (Purple Heart) & Capa Tiktok (Follower’s)
                (Capas do Aniversário de 15 anos)
                <br />
                Minecraft Java Edition e Bedrock
                Edition (Altera E-mail, Senha, Nick e Skin)
                <br />
                Ativação diretamente em seu e-mail
                <br />
                Acesso permanente e completo à todas as funções
                (Alteração de dados e a todos os servidores originais) 
                <br />
                Acesso oficial e privado a versão Java & Bedrock EXCLUSIVO: 50% de chance
                de ter a Migrator Cape, Vanilla Cape, Cherry Blossom Cape e/ou MCC
                15th Year Cape (Capas oficiais)
                <br />
                Chance de ter Rank no Hypixel (VIP, VIP+, MVP, MVP+)
                Chance de ter Cosméticos no Lunar ou Badlion
                </p>
            <button class="btn-3"> Comprar - R$ 70,00 </button>

        </div>
    </div>

      <footer>
      <div class="footer-container">
          <div class="footer-section">
              <h3>Links Importantes</h3>
              <ul>
                  <li><a href="#">Sobre Nós</a></li>
                  <li><a href="#">Serviços</a></li>
                  <li><a href="#">Contato</a></li>
              </ul>
          </div>

          <div class="footer-section">
              <div class="social-icons">
                  <a href="https://wa.me/91983075446" title="WhatsApp">
                      <img src="./src/assets/footer Whatsapp.jpg" alt="WhatsApp"/>
                  </a>
                  <a href="https://www.instagram.com/luiiskkj/" title="Instagram">
                      <img src="./src/assets/instagram footer.jpg" alt="Instagram"/>
                  </a>
              </div>
          </div>
      </div>

      <div class="footer-bottom">
          &copy; 2024 MineDev. Feito por Luis.
      </div>
     </footer>

      </header>
    )
  };
  
export default Home;
  