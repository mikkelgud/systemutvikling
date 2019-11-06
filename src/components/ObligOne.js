import React from 'react';
import styled from 'styled-components';
import TextBox from '../styleguides/TextBox';
import {StyledHeader} from '../styleguides/StyledHeader';
import IntresentTabell from '../assets/IntresentTabell.png'
import usecase from '../assets/usecase.jpg'

const LocalWrap = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 60vw;
`;

const StyledImage = styled.img`
display: flex;
margin:0;
width: 50%;
padding: 0;
border-radius: 10px;
object-fit: fill;
cursor: pointer;
`;

const StyledText = styled.p`
font-size: 18px;
text-align: left;
`;
const StyledTextAnswer = styled.p`
font-size: 23px;
text-align: left;
`;
const StyledImageRotated = styled.img`
display: flex;
margin: 0 0 0 60px;
width: 50%;
padding: 0;
border-radius: 10px;
object-fit: fill;
cursor: pointer;
transform: rotate(270deg);
`


export default function(){
 return(
     <LocalWrap>
          <TextBox>
         <StyledHeader>Oblig 1</StyledHeader>
         <StyledHeader>Oppgave 1</StyledHeader>
         <StyledText></StyledText>
         <StyledTextAnswer>         a) En ulempe med å betale pr. minutt for marka-sykler er at en tur i skogen som regel tar lengre tid enn en en bytur. 
         Hvis man tar en tur på to og en halv time, vil kostnaden være høyere enn engangsleie for den dyreste sykkelen, 
         og en tur i marka vil som regel ta lengre tid enn dette hvis man tar litt pauser underveis osv. 
         Derfor vil ikke dette være sparsomt. Det vil da være mer gunstig å kjøpe en engangs billett. 
         <br/>
         <br/>
         Fordeler : fordeler med å bruke den eksisterende betalingsmåten er at man har forskjellige muligheter å velge mellom slik at man betaler minst mulig og kun for det man bruker. Eks om man skal ta en liten tur kan man betale for hvert minutt, men om du skal sykle flere timer lønner det seg med engangs betaling. 
         Og så om du bruker ,markasykkel ofte så vil jo et abonnement være smart. Så mange muligheter for betaling gjør at det er mer aktuelt for alle typer brukere.
         <br/>
         <br/>
         Ulemper: ulemper med betalingsmåten er at om man velger noe som man trudde skulle passe deg og til slutt ikke gjorde det alikavle så kan det bli unødvendig dyrt og man betaler for noe man ikke hadde trengt. Eks om man punkterer eller må snu og har valgt engangs betaling så vil man bruke sykkelen mye mindre enn planlagt og dermed betale unødvendig mye, samt om man betaler for timen og roter seg bort eller bestemmer seg for å sykle lenger så blir det også unødvendig dyrt.
En annen ulempe er at om man skal bruke minutt prisen så har det ikke noe å si hviklen sykkel du tar og dermed vil nesten alle velge den bedre sykkelen, altså terrengsykkel og da kan det bli manko på terrengsykler.
</StyledTextAnswer>
<StyledText></StyledText>
<StyledTextAnswer>
b) Et aspekt ved Marka-sykkel som skiller seg fra Bysykkel er at det er to typer sykler i Marka-systemet. Derfor kan det være en fordel å utvikle et nytt system for Marka-sykkel, siden By-systemet kun har en type. 
Fordeler med å lage et eget system er at man kan perfeksjonere systemet etter dine brukeres behov. De som kommer til å bruke marka sykkel kommer til å ha andre behov og foretrekker noe annet en de som sykler i byen. Og dermed kan man utvikle et system som perfeksjonerer systemet etter brukerne dine sitt behov.
Ulemper: en ulempe med å utvikle nytt system er at de som allerede har bysykkel systemet av brukerene som vil benytte seg av markasykkel må lage ny brukere et nytt sted og dermed vil man gjøre det vanskelig for brukerene som benytter seg av bysykkel.
</StyledTextAnswer>
         </TextBox>
         <TextBox>
             <StyledHeader>Oppgave 2</StyledHeader>
             <StyledText></StyledText>
             <StyledTextAnswer>
                 a) Alle aktører er interessenter men ikke alle interessenter er aktører. Interessenter er samlebetegnelse for alle personer, grupper eller organer som påvirker systemets utvikling / bruk, både direkte og indirekte. En primæraktør har et mål i systemet, og en sekundæraktør hjelper dem å nå det målet. I Marka-systemet er feks. kommunen aktøren mens innbyggerne og brukerne er interessenter. 
</StyledTextAnswer>
             <StyledText></StyledText>
             <StyledTextAnswer>
                 b)
                 <StyledImage src={IntresentTabell}/>
             </StyledTextAnswer>
             <StyledText></StyledText>
             <StyledTextAnswer>cc)
De som setter mål for prosjektet, bestiller og finansierer prosjektet, i dette tilfelle kommunen, vil både være interessent og aktør. Dette er fordi interessenter er de som direkte vil påvirke prosjekter, mens aktøren har et mål for prosjektet. Begge disse punktene vil kommunen gå under.
</StyledTextAnswer>
         </TextBox>
         <TextBox>
             <StyledHeader>Oppgave 3</StyledHeader>
             <StyledText></StyledText>
             <StyledTextAnswer>a)
I plandrevne prosesser er alle aktivitetene planlagt på forhånd og progresjonen måles i henhold til den planen. Utviklingen foregår ofte i faser, som skal følges. De er ofte tunge prosesser. Blir ofte brukt i prosjekter som blir utviklet på flere geografiske områder.
</StyledTextAnswer>
             <StyledText></StyledText>
             <StyledTextAnswer>b)
I smidige metoder gjøres planleggingen litt etter litt (inkrementelt) og det er enklere å endre prosessen for å reflektere eventuelle forandring av krav fra kunden . Vektlegger kode fremfor omfattende design og dokumentasjon. Derfor er det lettere å tilpasse endringer av krav fra kunden. Smidige utviklingsprosesser egner seg best når kunden vil ha mye involvering i arbeidet.
</StyledTextAnswer>
             <StyledText></StyledText>
             <StyledTextAnswer>c)
Siden det allerede finnes et By-sykkel system, vet utviklerne så og si hvordan det er best å lage dette systemet. Derfor er det ikke sikkert at det er behov å endre kravspesifikasjonene underveis. noe som kanskje må bli endret på underveis er brukerne sine ønsker om type sykler og at det alltid skal være tilgjengelig. dermed blir det kanskje nødvendig å endre på dette underveis etter at markasykkel har blitt satt i drift- 
</StyledTextAnswer>
             <StyledText></StyledText>
             <StyledTextAnswer>d)
Vi tror at det er best med en plandrevet prosess pga. et liknende system allerede har blitt laget. Derfor vet utviklerne hvordan produktet skal se ut og kan bruke By-sykkel systemet som en mal.
</StyledTextAnswer>
         </TextBox>
         <TextBox>
             <StyledHeader>Oppgave 4</StyledHeader>
             <StyledText></StyledText>
             <StyledTextAnswer>a)
                 <ol>
            <li> Som bruker ønsker jeg å kunne se hvor mange sykler som er ledig, hvilken type, og hvor mange for å oppnå at det er lettere å planlegge turen.</li>
            <li>Som utvikler ønsker jeg å få tilbakemeldinger av brukerne for å oppnå måter å oppdatere til en bedre versjon.</li>
            <li>Som bruker ønsker jeg å kunne betale med vipps for å oppnå en lettere betaling.</li>
            <li>Som bruker(pensjonist) ønsker jeg å ha en annen måte å benytte meg av syklene enn en app for å oppnå enklere brukervennlighet for eldre.</li>
            <li>Som bruker ønsker jeg å kunne kartlegge turen i appen for slik at jeg kan planlegge turene mine.</li>
            <li>Som bruker ønsker jeg å kunne booke sykler før turen min for å være sikker på at syklene er der når jeg kommer.</li>
            <li>Som leder av Norsk Turforening ønsker jeg at dette blir tilgjengelig for flest mulig slik at folk bruker naturen vår.</li>
            <li>som eier ønsker jeg at programmet fungerer og at systemet lever opp til kravene slik at kundene/brukerene blir fornøyde.</li>
            <li>som eier ønsker jeg å få se hvilke stasjoner som blir brukt mest og få statistikk over bruken slik at jeg lettere kan se hvor vi burde plassere ut flere stasjoner.</li>
            <li>Som bruker ønsker jeg at det er flaskeholder på sykkelen slik at jeg kan drikke underveis.</li>
</ol>
</StyledTextAnswer>
             <StyledText></StyledText>
             <StyledTextAnswer>b)
                 <ol>
                 <li>Betaling med kort/vipps/faktura</li>
             <li>Få tilsendt kvittering på mail.</li>
             <li>Appen må kunne vise antall sykler til hvilke plasseringer. </li>
             <li>Det skal være mulig å registrere nye brukere og logge inn på appen.</li>
             <li>Appen skal kunne displaye din aktivitet med ruter, gj.hastighet og annen nyttig info. </li>
             <li>Appen skal kunne vise anbefalte ruter etter tidligere reiser. (Derfor må bruker også opplyses om privacy policies og appen må ha funksjoner som sørger for at rutene blir lagret, prosessert og sendt forslag tilbake til bruker.)</li>
             <li>Det skal være mulig å adde og slette andre brukere, slik at en kan sammenligne sykkelrutene sine, med venner sine.</li>
             <li>Appen skal kunne vise frem et kart der bruker kan navngi og lagre rutene sine.</li>
             <li>kartet må også kunne gi live oppdatering på nåværende posisjon. </li>
             <li>Bruker skal kunne skrive inn ønsket start og ønsket slutt, deretter skal appen foreslå en rute basert på brukerens input. </li>
</ol>

</StyledTextAnswer>
             <StyledText></StyledText>
             <StyledTextAnswer>c)
                 <ol>
                 <li>Miljøvern(Eksterne krav)</li>
             <li>Dokumentasjon(Organisatoriske)</li>
<li>Pris(Organisatoriske)</li>
<li>Sikkerhet(Eksterne krav)</li>
<li>Stabilitet(Organisatoriske)</li>
<li>Kapasitet(Produktkrav)</li>
<li>Personvern(Eksterne krav)</li>
<li>Kvalitet(Produkt krav)</li>
<li>Følger lover og regler(Eksterne krav)</li>
<li>Tilgjengelighet(Produktkrav)</li>
</ol>
</StyledTextAnswer>
             <StyledText></StyledText>
             <StyledTextAnswer>d)
                 <ol>
             <li>miljøvern- 
GPS-tracking av syklene
Dette gjør det mulig å finne sykler som eventuelt blitt stjålet eller lagt igjen i naturen, slik at vi kan hindre miljøsvin.
En bruker-rapporterings funksjon
En slik funksjon gjør det mulig for oss vite om evnt skader på syklene, og evnt deler som kan ha falt av på syklene.  
Gjøre gode undersøkelser om hvor stort markedet er
            Dette gjør at man kan ha et bærekraftig antall med sykler ute, men fortsatt klare å                                          
            tilfredsstille behovet til bruker
</li><li>dokumentasjon
Bruke source control på kode, f.eks github.
Dette gjør at hele kodeprosessen blir dokumentert, og det blir enkelt å finne hvilke ledd som evnt svikter.
Arkivere alle inntekter automatisk ved kjøp av bruker.
Dette sørger for at økonomien systematisk blir dokumentert 
</li><li>pris
Brukertilbakemeldinger
At det følger markedsverdien til produktet
</li><li>sikkerhet
Informasjon til bruker om påbudte sikkerhetstiltak 
            F.eks hjelm
Farts analytiske funksjoner som kan etterhvert kan informere bruker om anbefalt fart i ulikt terreng.  
</li><li>
Regulasjoner på hvilken tid av året det er forsvarlig å sykle i marka. 
</li><li>
stabilitet
God testing av programvare. Altså at koden og funksjonelle krav er testet på forhånd av lansering.
Gode bruker tilbakemeldinger 
</li><li>
kapasitet
Gjøre gode undersøkelser om hvor stort markedet er
Dette gjør at man kan ha et bærekraftig antall med sykler ute, men fortsatt klare å tilfredsstille behovet til bruker
</li><li>
personvern
Informere bruker om personvernrettigheter
Gjennomgå personvern med evnt advokater eller kompetente personer som vet hvilke personvernmessige saker vi burde tas stilling til.
</li><li>
    kvalitet
Kvalitetssikring av utstyr og teknologi
følger lover og regler
Sjekke med advokater og/eller andre kompetente personer som kan gjøre en analyse på hvilke lover og regler som gjelder for et slikt tilbud.
</li><li>tilgjengelighet
Sikre tilgjengelighet ved å ha god teknologi på hvilke steder sykler er plassert.
Ha gode kontaktmuligheter til oss som selskap dersom feil skulle oppstå.
</li>
</ol>
</StyledTextAnswer>
         </TextBox>

<TextBox>
         <StyledImage src={usecase}/>
          </TextBox>
     </LocalWrap>
 );
}