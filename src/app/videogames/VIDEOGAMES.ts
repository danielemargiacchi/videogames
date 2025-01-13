import { Videogame } from "./videogame/videogame.model";

export const VIDEOGAMES_LIST: Videogame[] = [
  {
    id: 1,
    titolo: "The Legend of Zelda: Breath of the Wild",
    descrizione: "Un'avventura epica in un mondo aperto con enigmi, combattimenti e una storia coinvolgente.",
    genere: "Azione/Avventura",
    dataRilascio: "2017-03-03",
    prezzo: "59.99€",
    disponibilita: true,
    coverImage: "/coverImages/zelda.jpg"
  },
  {
    id: 2,
    titolo: "Elden Ring",
    descrizione: "Un gioco di ruolo d'azione in un vasto mondo aperto creato da FromSoftware e George R.R. Martin.",
    genere: "GDR/Azione",
    dataRilascio: "2022-02-25",
    prezzo: "69.99€",
    disponibilita: false,
    coverImage: "/coverImages/elden.png"
  },
  {
    id: 3,
    titolo: "Super Mario Odyssey",
    descrizione: "Un platform 3D pieno di creatività e avventure con Mario e il suo nuovo compagno, Cappy.",
    genere: "Platform",
    dataRilascio: "2017-10-27",
    prezzo: "49.99€",
    disponibilita: false,
    coverImage: "/coverImages/supermario.jpg"
  },
  {
    id: 4,
    titolo: "God of War Ragnarök",
    descrizione: "Un'avventura cinematografica con Kratos e suo figlio Atreus nel mondo della mitologia norrena.",
    genere: "Azione/Avventura",
    dataRilascio: "2022-11-09",
    prezzo: "69.99€",
    disponibilita: true,
    coverImage: "/coverImages/godofwar.avif"
  },
  {
    id: 5,
    titolo: "Minecraft",
    descrizione: "Un sandbox creativo che permette di costruire, esplorare e sopravvivere in mondi generati proceduralmente.",
    genere: "Sandbox",
    dataRilascio: "2011-11-18",
    prezzo: "26.95€",
    disponibilita: false,
    coverImage: "/coverImages/minecraft.jpg"
  },
  {
    id: 6,
    titolo: "Hogwarts Legacy",
    descrizione: "Un GDR ambientato nel mondo di Harry Potter, dove puoi esplorare Hogwarts e vivere la tua avventura magica.",
    genere: "GDR/Azione",
    dataRilascio: "2023-02-10",
    prezzo: "59.99€",
    disponibilita: true,
    coverImage: "/coverImages/hogwartslegacy.webp"
  },
  {
    id: 7,
    titolo: "Microsoft Flight Simulator",
    descrizione: "Un simulatore di volo realistico con mappe mondiali dettagliate e un'ampia varietà di aerei.",
    genere: "Simulazione",
    dataRilascio: "2020-08-18",
    prezzo: "69.99€",
    disponibilita: false,
    coverImage: "/coverImages/flightsimulator.jpg"
  },
  {
    id: 8,
    titolo: "Grand Theft Auto V",
    descrizione: "Un open-world pieno di azione e crimini, ambientato nella vibrante città di Los Santos.",
    genere: "Azione/Avventura",
    dataRilascio: "2013-09-17",
    prezzo: "29.99€",
    disponibilita: true,
    coverImage: "/coverImages/gta.webp"
  },
  {
    id: 9,
    titolo: "Hollow Knight",
    descrizione: "Un metroidvania con esplorazione profonda e combattimenti impegnativi in un mondo disegnato a mano.",
    genere: "Platform/Azione",
    dataRilascio: "2017-02-24",
    prezzo: "14.99€",
    disponibilita: true,
    coverImage: "/coverImages/hollowknight.jpg"
  },
  {
    id: 10,
    titolo: "Stardew Valley",
    descrizione: "Un simulatore di vita agricola con elementi di esplorazione, crafting e relazioni sociali.",
    genere: "Simulazione",
    dataRilascio: "2016-02-26",
    prezzo: "13.99€",
    disponibilita: true,
    coverImage: "/coverImages/stardewvalley.jpg"
  }
];

