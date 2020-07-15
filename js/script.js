  let radiologia = [
        {
          hora: "11:00",
          especialista: "FEDERICO SUBERCASEAUX",
          paciente: "PAMELA ESTRADA",
          rut: "15345241-3",
          prevision: "ISAPRE"
        },
        {
          hora: "11:30",
          especialista: "IGNACIO SCHULZ",
          paciente: "FRANCISCA ROJAS",
          rut: "9878782-1",
          prevision: "ISAPRE"
        },
        {
          hora: "15:00",
          especialista: "FERNANDO WURTHZ",
          paciente: "ARMANDO LUNA",
          rut: "16445345-9",
          prevision: "ISAPRE"
        },
        {
          hora: "15:30",
          especialista: "ANA MARIA GODOY",
          paciente: "MANUEL GODOY",
          rut: "17666419-0",
          prevision: "FONASA"
        },
        {
          hora: "16:00",
          especialista: "PATRICIA SUAZO",
          paciente: "RAMON ULLOA",
          rut: "14989389-K",
          prevision: "FONASA"
        }
      ];
      let radioLongitud = radiologia.length;

      let traumatologia = [
        {
          hora: "08:00am",
          especialista: "Maria Paz Altuzurra",
          paciente: "PAULA SANCHEZ",
          rutPaciente: "15554774-5",
          prevision: "FONASA"
        },
        {
          hora: "10:00am",
          especialista: "Raul Araya",
          paciente: "ANGÉLICA NAVAS",
          rutPaciente: "15444147-9",
          prevision: "ISAPRE"
        },
        {
          hora: "10:30am",
          especialista: "Maria Arriagada",
          paciente: "ANA KLAPP",
          rutPaciente: "17879423-9",
          prevision: "ISAPRE"
        },
        {
          hora: "11:00am",
          especialista: "Alejandro Badilla",
          paciente: "FELIPE MARDONES",
          rutPaciente: "1547423-6",
          prevision: "ISAPRE"
        },
        {
          hora: "11:30am",
          especialista: "Cecilia Budnik",
          paciente: "DIEGO MARRE",
          rutPaciente: "16554741-K",
          prevision: "FONASA"
        },
        {
          hora: "12:00pm",
          especialista: "Arturo Cavagnaro",
          paciente: "CECILIA MENDEZ",
          rutPaciente: "9747535-8",
          prevision: "ISAPRE"
        },
        {
          hora: "12:30pm",
          especialista: "Andres Kanacri",
          paciente: "MARCIAL SUAZO",
          rutPaciente: "11254785-5",
          prevision: "ISAPRE"
        }
      ];
      let traumaLongitud = traumatologia.length;
      let dental = [
        {
          hora: "8:30",
          especialista: "Andrea Zuñiga",
          paciente: "Marcela Retamal",
          rut: "11123425-6",
          prevision: "ISAPRE"
        },
        {
          hora: "11:00",
          especialista: "Maria Pia Zañartu",
          paciente: "Angel Muñoz",
          rut: "0878789-2",
          prevision: "ISAPRE"
        },
        {
          hora: "11:30",
          especialista: "Scarlett Witting",
          paciente: "Mario Kast",
          rut: "7998789-5",
          prevision: "FONASA"
        },
        {
          hora: "13:00",
          especialista: "Francisco Von Teuber",
          paciente: "Karin Fernández",
          rut: "18887662-k",
          prevision: "FONASA"
        },
        {
          hora: "13:30",
          especialista: "Eduardo Viñela",
          paciente: "Hugo Sanchez",
          rut: "17665461-4",
          prevision: "FONASA"
        },
        {
          hora: "14:00",
          especialista: "Raquel Villaseca",
          paciente: "Ana Sepulveda",
          rut: "17665461-4",
          prevision: "ISAPRE"
        }
      ];
      let dentalLongitud = dental.length;
      document.write(
        `Cantidad de consultas para radiología: ${radioLongitud} </br>`
      );
      document.write(
        `Cantidad de consultas para dental: ${dentalLongitud} </br>`
      );
      document.write(
        `Cantidad de consultas para traumatología: ${traumaLongitud} </br>`
      );
      document.write(
        `Primer paciente ${radiologia[0].paciente} -  ${
          radiologia[0].prevision
        } | Último paciente ${radiologia[radioLongitud - 1].paciente} -  ${
          radiologia[radioLongitud - 1].prevision
        } <br />`
      );
      document.write(
        `Primer paciente dental ${dental[0].paciente} - ${
          dental[0].prevision
        } | Último paciente ${dental[dentalLongitud - 1].paciente} | ${
          dental[dentalLongitud - 1].prevision
        }<br/>`
      );
      document.write(
        `Primer paciente ${traumatologia[0].paciente}  ${
          traumatologia[0].prevision
        } | Último paciente ${traumatologia[traumaLongitud - 1].paciente}  ${
          traumatologia[traumaLongitud - 1].prevision
        } <br />`
      );