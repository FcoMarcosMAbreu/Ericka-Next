import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Ericka Negreiros</title>
          <meta
            name="description"
            content="Site oficial da empresa Ericka Negreiros Alcantara ME."
          />
          <meta property="og:title" content="Ericka Negreiros" />
          <meta
            property="og:description"
            content="Site oficial da empresa Ericka Negreiros Alcantara ME."
          />
        </Head>
        <Header rootClassName="rootClassName"></Header>
        <div className="hero">
          <div className="container01">
            <div className="card">
              <div className="container02">
                <div className="container03">
                  <img
                    alt="image"
                    src="/playground_assets/ericka%20alcantara-1500h.jpg"
                    className="image"
                  />
                </div>
                <div className="container04">
                  <h1 className="text headingOne">Ericka Negreiros</h1>
                  <h1 className="text01 headingOne">
                    Especialista em PresenÃ§a Online
                  </h1>
                  <span className="text02 lead">
                    <span>
                      Receba um acompanhamento profissional desde a concepÃ§Ã£o
                      visual da sua ideia atÃ© o lanÃ§amento do seu site ou
                      aplicativo, e veja o seu negÃ³cio decolar!
                    </span>
                  </span>
                  <div className="container05">
                    <div className="container06">
                      <PrimaryPinkButton button="entre em contato"></PrimaryPinkButton>
                    </div>
                    <OutlineGrayButton button="leia mais"></OutlineGrayButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1488159573254-8be37738cf7f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM0fHxTJUMzJUEzbyUyMFBhdWxvfGVufDB8fHx8MTYzMDM3MDQyNw&amp;ixlib=rb-1.2.1&amp;h=1200"
          className="image1"
        />
        <section className="features">
          <FeatureCard
            text="Anos de trabalho resultaram em habilidades essenciais"
            title="ExperiÃªncia"
            image_src="/playground_assets/cube1.svg"
          ></FeatureCard>
          <FeatureCard
            text="Tudo comeÃ§a quando todos os detalhes estÃ£o bem definidos"
            title="DiÃ¡logo"
            image_src="/playground_assets/person1.svg"
          ></FeatureCard>
          <FeatureCard
            text="FaÃ§a o mÃ¡ximo de pessoas saberem da novidade"
            title="AÃ§Ã£o"
            image_src="/playground_assets/rocket1.svg"
          ></FeatureCard>
          <FeatureCard
            text="Juntos, vocÃª vai validar a sua ideia atuando no mercado"
            title="AnÃ¡lise"
            image_src="/playground_assets/credit%20card1.svg"
          ></FeatureCard>
        </section>
        <section className="container07">
          <div className="container08">
            <h1 className="text04 headingOne">
              <span className="text05">Do nada para algo</span>
            </h1>
            <span className="text06">
              <span className="text07">
                Trabalhar com vocÃª vai ser um prazer
              </span>
            </span>
          </div>
          <div className="container09">
            <div className="container10">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
                className="image2"
              />
              <span className="text08 lead">
                <span className="text09">ServiÃ§os de Primeira Linha</span>
              </span>
              <div className="container11">
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                  className="image3"
                />
              </div>
            </div>
            <div className="container12">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
                className="image4"
              />
              <div className="container13">
                <h3 className="headingTwo">
                  <span className="text11">
                    A estrutura atual da organizaÃ§Ã£o causa impacto indireto na
                    reavaliaÃ§Ã£o do remanejamento dos quadros funcionais
                  </span>
                </h3>
                <p>
                  <br></br>
                  <span>
                    Pensando mais a longo prazo, a determinaÃ§Ã£o clara de
                    objetivos nÃ£o pode mais se dissociar das condiÃ§Ãµes
                    financeiras e administrativas exigidas. Ã importante
                    questionar o quanto a complexidade dos estudos efetuados
                    acarreta um processo de reformulaÃ§Ã£o e modernizaÃ§Ã£o das
                    diretrizes de desenvolvimento para o futuro. Assim mesmo, a
                    contÃ­nua expansÃ£o de nossa atividade faz parte de um
                    processo de gerenciamento das formas de aÃ§Ã£o.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    No entanto, nÃ£o podemos esquecer que o inÃ­cio da atividade
                    geral de formaÃ§Ã£o de atitudes facilita a criaÃ§Ã£o dos mÃ©todos
                    utilizados na
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    avaliaÃ§Ã£o de resultados. O cuidado em identificar pontos
                    crÃ­ticos na necessidade de renovaÃ§Ã£o processual apresenta
                    tendÃªncias no sentido de aprovar a manutenÃ§Ã£o das novas
                    proposiÃ§Ãµes. A prÃ¡tica cotidiana prova que o desenvolvimento
                    contÃ­nuo de distintas formas de atuaÃ§Ã£o assume importantes
                    posiÃ§Ãµes no estabelecimento das direÃ§Ãµes preferenciais no
                    sentido do progresso.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Acima de tudo, Ã© fundamental ressaltar que a percepÃ§Ã£o das
                    dificuldades obstaculiza a apreciaÃ§Ã£o da importÃ¢ncia dos
                    modos de operaÃ§Ã£o convencionais. Desta maneira, a expansÃ£o
                    dos mercados mundiais possibilita uma melhor visÃ£o global
                    das condiÃ§Ãµes inegavelmente apropriadas. Evidentemente, o
                    aumento do diÃ¡logo entre os diferentes setores produtivos
                    oferece uma interessante oportunidade para verificaÃ§Ã£o dos
                    Ã­ndices pretendidos. As experiÃªncias acumuladas demonstram
                    que a consulta aos diversos militantes cumpre um papel
                    essencial na formulaÃ§Ã£o das posturas dos Ã³rgÃ£os dirigentes
                    com relaÃ§Ã£o Ã s suas atribuiÃ§Ãµes.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container14">
            <div className="container15">
              <div className="container16">
                <h2 className="text21 headingOne">Vamos trabalhar juntos?</h2>
                <p className="text22 lead">
                  <span className="text23">
                    Talvez sua ideia sÃ³ precisa de um empurrÃ£o.
                  </span>
                </p>
                <p className="text24 body">
                  <span className="text25">
                    &quot;Pegue uma ideia. Transforme essa ideia em sua vida -
                    pense nela, sonhe com ela, viva dessa ideia. Deixe o
                    cÃ©rebro, os mÃºsculos, os nervos, cada parte do seu corpo,
                    estar cheio dessa ideia e simplesmente deixar cada outra
                    ideia sozinha. Este Ã© o caminho para o sucesso. Uma Ãºnica
                    rosa pode ser meu jardim ... um Ãºnico amigo, meu mundo.
                    &quot;
                  </span>
                </p>
                <p className="text26">Mark Jojansen</p>
                <p className="text27 small">Gerente de Projeto, Atlassian</p>
                <div className="container17">
                  <img
                    alt="image"
                    src="/playground_assets/team-4-1500h.jpg"
                    className="image5"
                  />
                  <div className="container18"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-3-1500h.jpg"
                    className="image6"
                  />
                  <div className="container19"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-2-1500h.jpg"
                    className="image7"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/bottom.svg"
            className="bottom-wave-image"
          />
          <img
            alt="image"
            src="/playground_assets/waves-white.svg"
            className="image8"
          />
          <img
            alt="image"
            src="/playground_assets/top.svg"
            className="top-wave-image"
          />
        </section>
        <section className="contaier">
          <div className="container20">
            <div className="container21">
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="text28 headingTwo">
              <span className="text29">Cuide Do Que Importa</span>
            </h2>
            <h3 className="text30 headingTwo">
              <span className="text31">Veja Como Fazer</span>
            </h3>
            <span className="text32">
              <span className="text33">
                NÃ³s estamos constantemente tentando nos expressar e realizar
                nossos sonhos. NÃ£o devemos parar.
              </span>
            </span>
          </div>
          <div className="container22">
            <div className="container23">
              <div className="container24"></div>
              <div className="container25">
                <svg viewBox="0 0 987.4285714285713 1024" className="icon2">
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="text34 headingOne">Pesquise e Descubra!</h1>
                <span className="text35">
                  <span>Visitantes do site</span>
                </span>
                <OutlineBlackButton button="comeÃ§ar"></OutlineBlackButton>
              </div>
            </div>
            <div className="container26">
              <ListItem
                title="1. OuÃ§a Conversas Sociais"
                description="Obtenha acesso a dados demogrÃ¡ficos, psicogrÃ¡ficos e localizaÃ§Ã£o de pessoas exclusivas que estÃ£o interessadas e falam sobre sua marca."
              ></ListItem>
              <ListItem
                title="2. AnÃ¡lise de Desempenho"
                description="Unifique os dados do Facebook, Instagram, Twitter, LinkedIn e Youtube para obter informaÃ§Ãµes valiosas de relatÃ³rios fÃ¡ceis de usar."
              ></ListItem>
              <ListItem
                title="3. ConversÃµes Sociais"
                description="Rastreie as aÃ§Ãµes realizadas em seu site com origem nas redes sociais e entenda o impacto em seus resultados financeiros."
              ></ListItem>
            </div>
          </div>
          <div className="divider"></div>
          <div className="container27">
            <div className="container28">
              <ListItem
                title="1. Sempre em Sincronia"
                description="NÃ£o importa onde vocÃª esteja, o Trello permanece sincronizado em todos os seus dispositivos."
              ></ListItem>
              <ListItem
                title="2. Trabalhe Com Qualquer Equipe"
                description="Unifique os dados do Facebook, Instagram, Twitter, LinkedIn e Youtube para obter informaÃ§Ãµes valiosas de relatÃ³rios fÃ¡ceis de usar."
              ></ListItem>
              <ListItem
                title="3. Uma Plataforma de Produtividade"
                description="Integre os aplicativos que sua equipe jÃ¡ usa diretamente em seu fluxo de trabalho."
              ></ListItem>
            </div>
            <div className="container29">
              <div className="container30"></div>
              <div className="container31">
                <svg viewBox="0 0 1152 1024" className="icon4">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="text37 headingOne">Converse e ConheÃ§a!</h1>
                <span className="text38">
                  <span>Visitantes do site</span>
                </span>
                <OutlineBlackButton button="comeÃ§ar"></OutlineBlackButton>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .hero {
            width: 100%;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .container01 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .card {
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: center;
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .container02 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container03 {
            flex: 0 0 auto;
            width: 33%;
            margin: 0px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .image {
            width: 100%;
            margin: 0px;
            padding: var(--dl-space-space-halfunit);
            z-index: 100;
            object-fit: cover;
            border-color: var(--dl-color-pink-300);
            border-style: solid;
            border-width: var(--dl-size-size-halfunit);
            border-radius: var(--dl-radius-radius-round);
          }
          .container04 {
            flex: 0 0 auto;
            width: 67%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text01 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .text02 {
            color: var(--dl-color-secondary-600);
            text-align: left;
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .container05 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .container06 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .image1 {
            top: 0px;
            left: auto;
            right: 0px;
            width: 50%;
            bottom: 0px;
            height: 80vh;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .features {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container08 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .text04 {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text05 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .text06 {
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text07 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .container10 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .image2 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .text08 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 8rem;
            flex-direction: column;
          }
          .text09 {
            color: rgb(203, 12, 159);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .container11 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .image3 {
            top: 0px;
            left: auto;
            width: 90%;
            bottom: auto;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .container12 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .image4 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .container13 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .text11 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .container15 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .container16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text21 {
            color: var(--dl-color-gray-white);
          }
          .text22 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text23 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .text24 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text25 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .text26 {
            color: var(--dl-color-gray-white);
          }
          .text27 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
          }
          .container17 {
            flex: 0 0 auto;
            display: none;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .image5 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .image5:hover {
            transform: scale(1.2);
          }
          .container18 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .image6 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .image6:hover {
            transform: scale(1.2);
          }
          .container19 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .image7 {
            width: 40px;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .image7:hover {
            transform: scale(1.2);
          }
          .bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .image8 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .contaier {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container20 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container21 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .icon {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .text28 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text29 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .text30 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text31 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text33 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .container22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container23 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .container23:hover {
            transform: scale(1.04);
          }
          .container24 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .container25 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .icon2 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text34 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text35 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .container26 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .container27 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container28 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .container29 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coffee-shop.jpg');
            background-position: center;
          }
          .container29:hover {
            transform: scale(1.04);
          }
          .container30 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .container31 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .icon4 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text37 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text38 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .container01 {
              max-width: 960px;
            }
            .card {
              width: 100%;
            }
            .features {
              max-width: 960px;
            }
            .container07 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container08 {
              max-width: 80%;
            }
            .text06 {
              text-align: center;
            }
            .text08 {
              width: 50%;
            }
            .container14 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .container15 {
              align-items: center;
            }
            .container16 {
              margin-right: 0px;
            }
            .contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container26 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
            .container28 {
              width: 45%;
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .card {
              align-items: center;
            }
            .text02 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .image1 {
              display: none;
            }
            .features {
              max-width: 720px;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-unitandahalfunit);
              padding-right: var(--dl-space-space-unitandahalfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .container07 {
              max-width: 720px;
            }
            .container09 {
              align-items: center;
              flex-direction: column;
            }
            .container10 {
              width: 80%;
            }
            .image2 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .text08 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .image3 {
              display: none;
            }
            .container12 {
              width: 80%;
            }
            .image4 {
              display: none;
            }
            .container14 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .container20 {
              width: 80%;
            }
            .text32 {
              text-align: center;
            }
            .container22 {
              flex-direction: column;
            }
            .container26 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container27 {
              margin-top: 0px;
              flex-direction: column;
            }
            .container28 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .card {
              padding: var(--dl-space-space-unit);
            }
            .container05 {
              align-items: center;
              flex-direction: column;
            }
            .container06 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .features {
              width: 100%;
            }
            .container14 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .text32 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
