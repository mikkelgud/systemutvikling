import React from 'react';
import styled from 'styled-components';
import TextBox from '../styleguides/TextBox';
import {StyledHeader} from '../styleguides/StyledHeader';
import klassediagram from '../assets/klasseDiagram.png';
import brukstilfellet from '../assets/brukstilfellet.jpg';
import sekvensdiagram from '../assets/sekvensdiagram.jpg';
import tabellObligTo from '../assets/tabellObligTo.png';
import barchar from '../assets/barchar.png';
import usikkerhetsmatrise from '../assets/usikkerhetsmatrise.jpg';

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
             <StyledHeader>Oppgave 1: Klassediagram</StyledHeader>
             <StyledText>
Lag et klassediagram for systemet. Ta med assosiasjoner mellom klassene, 
og metoder og attributter til hver klasse. Husk at dere kan skrive egne forutsetninger,
 og forenkle der det er nødvendig.
 (Husk også at alle metoder og attributter dere kommer frem til i oppgave 2 skal være med her)
 </StyledText>
 <StyledImage src={klassediagram}/>
         </TextBox>

         <TextBox>
         <StyledHeader>Oppgave 2: Sekvensdiagram</StyledHeader>
         <StyledText>
For å opprette nye kunder i systemet må kunden selv registrere seg.
 Dette gjøres enten via Ruter-appen (hvor navn og annen informasjon allerede ligger inne dersom man er Ruter-kunde)
  eller via nettsiden til marka-sykler. Dette kan altså ikke gjøres på billettautomatene til Ruter.
  <br/>
  <br/>
a. Lag en tekstlig bekrivelse for brukstilfellet “Registrer utlån”. Ha med aktører, eventuelle pre- og postbetingelser, 
hovedflyt og alternativ flyt der kunden ikke finnes i systemet fra før.
<br/>
<br/>
<StyledTextAnswer>
Navn: Registerer utlån
<br/>
Aktør: Bruker ( primær-aktør), Markasykkel (sekundær-aktør)
<br/>
Prebetingelse: Kunde har instalert app, eller går vi nettside.
<br/>
Postbetingelse: Utlån registrert og sykkel hentet.
<br/>
<br/>
Hovedflyt:
<ol>
<li>Bruker logger inn.</li>
<li>Bruker verifiseres av systemet.</li>
<li>Bruker velger sykkeltype.</li>
<li>Systemet registrer ordre og sender ordrebekreftelse til bruker.</li>
<li>Bruker bekrefter ordre.</li>
<li>Utlån av sykkel blir registrert til systemet.</li>
<li>Kunde får bekreftelse av at utlånet er godkjent,</li>
<li>Sykkel låses opp</li>
<li>Kunde får kvittering på utlån</li>
<li>Kunde henter sykkel</li>
</ol>
Alternativ flyt:
<br/>
<ol>
<li>Kunde får beskjed at han/hun ikke er registrert/eksisterer.</li>
<li>Kunde oppretter konto.</li>
<li>Systemet registrer konto.</li>
<li>Kunde får tilbakemelding om at konto er registrert.</li>
<li>Returnerer til steg to hovedflyten.</li>
</ol>
<br/>
</StyledTextAnswer>
b. Lag et sekvensdiagram for brukstilfellet “Registrer utlån”. Bruk de nødvendige klassene og metodene fra oppgave 1. Ta med alternativ flyt der kunden ikke finnes i systemet fra før.
Ansatte som jobber i systemet for markasykler kan se oversikt over kunder, sykler, stasjoner og generere eventuelle rapporter. Anta at dette gjøres gjennom et brukergrensesnitt som kommuniserer med systemet for markasykler (main-klassen).
<br/>
<StyledTextAnswer></StyledTextAnswer>
<StyledImage src={brukstilfellet}/>
<br/>
<br/>
c. Lag et sekvensdiagram for brukstilfellet “Se oversikt over sykler som ikke er levert i tide”.
<StyledTextAnswer></StyledTextAnswer>
<StyledImage src={sekvensdiagram}/>

</StyledText>
</TextBox>
<TextBox>
   <StyledHeader> Oppgave 3: Prosjektplanlegging</StyledHeader>
   <StyledText>
Uavhengig av hva dere har svart tidligere;; 
anta at utviklerne bestemmer seg for en plandrevet utviklingsprosess.
<br/>
<br/>
a. Identifiser de overordnede aktivitetene som inngår i utviklingen av systemet for markasykler.
 Beskriv disse. Ha med minst 8 aktiviteter.
<StyledTextAnswer>
1.
Krav-kartlegging/-arbeid
Det er ønskelig å kartlegge hvilke krav som det planlagte systemet må ha/trenger for bli et velfungerende system. Der det i aller høyeste grad skal settes fokus på de funksjonelle kravene.
<br/><br/>
2.
Utforming
Utformingen av systemet skal være systematisk og punktlig. Da er det viktig at nødvendige diagrammer blir laget slik at teamet alltid følger samme utformingsmoduler under utvikling av systemet. Det er også ønskelig å vite hvilke delsystemer det store overordnede systemet trenger. Dette kan f.eks være “Micro-services”, uavhengig funksjonalitet som en betalingsløsning og andre generelle funksjonaliteter  systemet trenger. Her skal systemets design også utformes med god argumentasjon på valg av design i henhold til god brukeropplevelse.
<br/><br/>
3.
Problemanalyse
Det ønskes å vite på forhånd hvilke problemstillinger systemet må ta stilling til og evnt om det er mulig å løse disse problemene innenfor budsjett og teknologiske ressurser. Dette kan f.eks være å løse antall sykler på gitte parkerings problematikken, og hvordan dette skal løses rent teknisk. 
<br/><br/>
4.
Implementasjon
Det er ønskelig å produsere app som følger den planlagte gitte utformingen. Her skal systemet lages og de gitte planene skal realiseres på den best mulige intuitive måte. Her skal også delsystemene implementeres etter gitte parametere. 
<br/><br/>
5.
Funksjonalitets-gjennomgang
Man må vite om systemet inneholder planleggingens planlagte metoder og sammensetninger. En ønsker derfor å få lokalisert eventuelle hull eller mangler i den funksjonelle 
<br/><br/>
6.
Testing
Teste at alt fungerer som det skal i henhold til de kravene som ble satt under planlegging av systemet.
<br/><br/>
7.
Innføring
Innføring av systemet. Typisk en brukermanual eller liknende som brukeren har til å lære seg hvordan systemet fungerer.
<br/><br/>
8.
Drift og vedlikehold
Systemet må etter utgivelse først og fremst holdes oppe slik at servere og systemet blir godt vedlikeholdt. Vedlikeholdt på den måten at interface og ux oppdateres dersom dette tydelig er ønskelig fra bruker.
 						
</StyledTextAnswer>

 <br/>
 <br/>
b. Ta utgangspunkt i de overordnede aktivitetene som foreslått i oppgave a). Gi hver aktivitet et unikt navn,
 varighet, eventuelle avhengigheter og milepæler. Gjør dette ved å lage en tabell 
 (bruk gjerne samme format som i figur 23.5).
<StyledTextAnswer></StyledTextAnswer>
<StyledImage src={tabellObligTo}/>

 <br/>
 <br/>
c. Bruk tabellen til å lage et stolpediagram (bar chart) med utgangspunkt i figur 23.6.
<StyledTextAnswer></StyledTextAnswer>
<StyledImage src={barchar}/>
<br/>
<br/>
d. Lag en risikoanalyse ved å benytte en usikkerhetsmatrise. Få med risiko, sannsynlighet for risiko,
 konsekvens av risiko, hvilke tiltak som må iverksettes og hvem som er ansvarlig for hvert risikomoment. Ha med minst seks risikomomenter.
<StyledTextAnswer></StyledTextAnswer>
<StyledImageRotated src={usikkerhetsmatrise}/>

    </StyledText>
</TextBox>
     </LocalWrap>
 );
}