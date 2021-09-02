import React from 'react';
import './index';

import ComParametro from './components/Parametro';
import Titulo from './components/layout/Cabecalho';
import Card from './components/layout/Card';
import Footer from './components/layout/Footer';
import BotaoVisita from './components/layout/BotaoVisita';

export default (props) => (
    <div clasName="App">
        <Titulo/>
        <Card titulo='Rio de Janeiro - Brasil'>
            <ComParametro 
            titulo='Cristo Redentor 🙌🏻' 
            descricao='Ícone do Rio de Janeiro, o Cristo é, sem dúvidas, um dos mais célebres pontos turísticos do Brasil. E sua fama roda o mundo! Ao lado da Muralha da China, do Coliseu e do Taj Mahal, a famosa estátua integra a lista das Sete Novas Maravilhas do Mundo Moderno, feita pela votação da New 7 Wonders Foundation. Situado no topo dos 710 m de altura do Morro do Corcovado, o monumento de 38 m, impressiona pela imponência desde sua inauguração, em outubro de 1931. Todos os anos, mais de 600 mil pessoas atravessam a Floresta da Tijuca com o Trem do Corcovado e chegam aos pés da estátua num mix de emoção, contemplação e fé.' 
            imagem="https://diariodorio.com/wp-content/uploads/2021/05/Cristo-Redentor.jpg" 
            loc='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d322.46010584186297!2d-43.209307580478466!3d-22.9519108675706!2m3!1f265.8750000000007!2f57.02316098787544!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sChrist%20the%20Redeemer!5e1!3m2!1sen!2sbr!4v1630296317431!5m2!1sen!2sbr' 
            video="https://www.youtube.com/embed/HMQzJQKf6J4"
            button='https://www.google.com/maps/@-22.9519109,-43.2093076,322a,35y,265.88h,57.02t/data=!3m1!1e3!5m1!1e4'
            />
            <BotaoVisita/>
        </Card>
        
        <Card titulo='Salvador - Brasil'>
            <ComParametro 
            titulo='Elevador Lacerda 🌄' 
            descricao='Cartão-postal de Salvador, o monumento é a maneira mais original de passear pelas cidades alta e baixa na capital baiana. Inaugurado em 1873, com 72 m de altura o elevador liga a Praça Tomé de Souza com a Cairu, onde está o Mercado Modelo. Do alto das duas torres da construção é possível observar a Baía de Todos-os-Santos e, mais ao fundo, o Forte de São Marcelo. A viagem pelo espaço dura cerca de 30 segundos, sendo transportadas até 20 mil pessoas por dia.' 
            imagem="https://magazine.zarpo.com.br/wp-content/uploads/2018/09/elevador-lacerda_bahia_zarpo.jpg" 
            loc='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d576.8623294188874!2d-38.52540171347694!3d-12.970744122665732!2m3!1f96.37500000000014!2f69.54630153524758!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x71604efa5d0086f%3A0x725930e371c16778!2sElevador%20Lacerda!5e1!3m2!1sen!2sbr!4v1630296916122!5m2!1sen!2sbr' 
            video="https://www.youtube.com/embed/3-P8LkxdagU"
            button='https://www.google.com/maps/@-12.9741467,-38.5153003,111a,35y,88.13h,72.71t/data=!3m1!1e3'
            />
            <BotaoVisita/>
        </Card>

        <Card titulo='New York - Estados Unidos'>
            <ComParametro 
            titulo='Estátua da Liberdade 🗽' 
            descricao='A Estátua da Liberdade é um grande monumento localizado nos Estados Unidos. Ela foi declarada pela Unesco como Patrimônio Mundial, em 1984. Uma das mais famosas do mundo, a estátua é um ícone que simboliza a liberdade, a democracia e a esperança do povo estadunidense. Estátua da Liberdade. O monumento representa a deusa romana da liberdade: “Libertas”. Ela sustenta uma tocha na mão direita (que está erguida), e na esquerda ela segura o Declaração da Independência dos Estados Unidos com a data da Independência do país escrita em números romanos: 4 de julho de 1776.' 
            imagem='https://s1.1zoom.me/big0/372/USA_Sky_New_York_City_454322.jpg' 
            loc='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.53269359411206!2d-74.03809787384503!3d40.68325684198749!2m3!1f314.43750000000097!2f77.14107390158141!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e1!3m2!1sen!2sbr!4v1630370077628!5m2!1sen!2sbr' 
            video='https://www.youtube.com/embed/aUc7SUmTGSo?start=5'
            button='https://www.google.com/maps/place/Statue+of+Liberty+National+Monument/@40.6865924,-74.0414779,150a,35y,315.94h,75.09t/data=!3m1!1e3!4m12!1m6!3m5!1s0x0:0x40c6a5770d25022b!2sStatue+of+Liberty+National+Monument!8m2!3d40.6892494!4d-74.0445004!3m4!1s0x0:0x40c6a5770d25022b!8m2!3d40.6892494!4d-74.0445004'
            />
            <BotaoVisita/>
        </Card>

        <Card titulo='Paris - França'>
            <ComParametro 
            titulo='Torre Eiffel 🗼' 
            descricao='A Torre Eiffel é uma torre treliça de ferro do século XIX localizada no Champ de Mars, em Paris, a qual se tornou um ícone mundial da França. A torre, que é o edifício mais alto da cidade, é o monumento pago mais visitado do mundo, com milhões de pessoas frequentando-o anualmente. Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel, foi construída como o arco de entrada da Exposição Universal de 1889.' 
            imagem='https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg' 
            loc='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.14542776090093!2d2.305895926516302!3d48.85076496903916!2m3!1f312.93750000000017!2f78.97573794407235!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x0%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e1!3m2!1sen!2sbr!4v1630370480045!5m2!1sen!2sbr' 
            video='https://www.youtube.com/embed/M4Y3ec7CHmI'
            button='https://www.google.com/maps/place/Eiffel+Tower/@48.850765,2.3058959,224a,35y,312.94h,78.98t/data=!3m1!1e3!4m5!3m4!1s0x0:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813'
            />
            <BotaoVisita/>
        </Card>

        <Card titulo='Dakota do Sul - Estados Unidos'>
            <ComParametro 
            titulo='Monte Rushmore - Memorial Nacional ⛰️' 
            descricao='O Monte Rushmore presta uma homenagem patriótica a quatro presidentes dos Estados Unidos que são: George Washington, Thomas Jefferson, Theodore Roosevelt e Abraham Lincoln. Com rostos de 18 metros esculpidos numa montanha em Black Hills, no Dakota do Sul. Ao longo dos anos, o monumento foi alvo de protestos devido à sua localização em terras indígenas, debates sobre se outro presidente mereceria um lugar na montanha e uma polémica em Hollywood sobre um filme de Alfred Hitchcock que foi parcialmente filmado no local.'
            imagem='https://aventurasnahistoria.uol.com.br/media/_versions/estados_unidos/monte_rushmore_widexl.jpg' 
            loc='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.955655295169!2d-103.44132918667378!3d43.868086542205!2m3!1f299.8125000000003!2f71.29388136237944!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x0%3A0xdaf53dbe055cc641!2sMount%20Rushmore%20National%20Memorial!5e1!3m2!1sen!2sbr!4v1630467770339!5m2!1sen!2sbr' 
            video='https://www.youtube.com/embed/4E-HeooQwLI?start=5'
            button='https://www.google.com/maps/place/Mount+Rushmore+National+Memorial/@43.8776941,-103.4566141,190a,35y,299.81h,71.5t/data=!3m1!1e3!4m5!3m4!1s0x0:0xdaf53dbe055cc641!8m2!3d43.8791025!4d-103.4590667'
            />
            <BotaoVisita/>
        </Card>

        <Footer/>       
    </div>
)