
import { savetask, gettask } from "./firebase.js";

const taskForm = document.getElementById('task-form')
const taskContainer = document.getElementById('tasks-container')

window.addEventListener('DOMContentLoaded', async () => {

})


taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombreyapellidoBeneficiario = taskForm['nombre y apellido']
    const lugarnacimientoBeneficiario = taskForm['Lugar']
    const fechanacimientoBeneficiario = taskForm['fecha nacimiento']
    const tipoducmentoBeneficiario = taskForm['tipodocu']
    const numeroducmentoBeneficiario = taskForm['Numero de documento']
    const generoBeneficiario = taskForm['tipogene']
    const gruposanguineoBeneficiario = taskForm['grupo_sanguineo']
    const cursoBeneficiario = taskForm['curso']
    const direccionBeneficiario = taskForm['Direccion']
    const telefonoBeneficiario = taskForm['Numero de Telefono']
    const celularBeneficiario = taskForm['Numero de Celular']
    const SisbenBeneficiario = taskForm['Puntaje Sisben']
    const seguridadsocialBeneficiario = taskForm['Seguridad Social']
    const redunidosBeneficiario = taskForm['Red Unidos']
    const grupoetnico = taskForm['etnico']
    const victimaconflicto = taskForm['víctima']
    const padredesmovilizado = taskForm['desmovilizado']
    const amenazadoreclutamiento = taskForm['Reclutamiento']
    const departamentoresidencia = taskForm['Departamendo']
    const municipioresidencia = taskForm['Municipio']
    const zonaubicacionresidencia = taskForm['ubicacion']
    const direccionresidencia = taskForm['DirecciónV']
    const barrioresidencia = taskForm['BarrioV']
    const tipodevivienda = taskForm['tvivienda']
    const tipodetendenciavivienda = taskForm['tendencia']
    const tiempopermanecianucleocasa = taskForm['TiempoF']
    const numerodefamiliares = taskForm['Numero de familiar']
    const espaciosidependientescasa = taskForm['independientes']
    const acueductocasa = taskForm['Acueducto']
    const energiacasa = taskForm['Energia']
    const gasnaturalcasa = taskForm['Gas natural']
    const telefonocasa = taskForm['Telecasa']
    const alcantarilladocasa = taskForm['Alcantarillado']
    const internetcasa = taskForm['Internet']
    const obtencionagua = taskForm['Acueducto1']
    const usanelagua = taskForm['Acueducto2']
    const elminabasura = taskForm['basuras']
    const sanitario = taskForm['sanitario']
    const viasacceso = taskForm['Vias de acceso']
    const transportepublcio = taskForm['Transporte publico']
    const sedeeducativa = taskForm['Sedes educativas']
    const ludoteca = taskForm['Ludotecas']
    const centrosalud = taskForm['Centros de salud']
    const parques = taskForm['Parques']
    const nombreyapellidocabezahogar = taskForm['nombre y apellidoCabe']
    const tipodecumentocabezahogar = taskForm['tipodocuCabe']
    const numerodecumentocabezahogar = taskForm['Numero de documentoCabe']
    const lugarnacimientocabezahogar = taskForm['LugarCabe']
    const fechanacimientocabezahogar = taskForm['fecha nacimientoCabe']
    const direccioncabezahogar = taskForm['DirecciónCabe']
    const barriocabezahogar = taskForm['BarrioCabe']
    const correoelectronicocabezahogar = taskForm['CorreoCabe']
    const telefonocabezahogar = taskForm['Numero de TelefonoCabe']
    const celularcabezahogar = taskForm['Numero de CelularCabe']
    const parentescocabezahogar = taskForm['ParentescoCabe']
    const sabeleercabezahogar = taskForm['LeerCabe']
    const sabeescribircabezahogar = taskForm['EscribirCabe']
    const primariacabezahogar = taskForm['Basica primariaCabe']
    const secundariacabezahogar = taskForm['Basica secundariaCabe']
    const tecniciocabezahogar = taskForm['TecnicoCabe']
    const tecnologicocabezahogar = taskForm['TecnologicoCabe']
    const universidadcabezahogar = taskForm['UniversitarioCabe']
    const conflictocabezahogar = taskForm['conflicto armadoCabe']
    const desastrescabezahogar = taskForm['desastres naturalesCabe']
    const discapacidadcabezahogar = taskForm['DiscapacidadCabe']
    const condicionespecialcabezahogar = taskForm['condicion especialCabe']
    const familiasaccioncabezahogar = taskForm['famliaacCabe']
    const estadolaboralcabezahogar = taskForm['empleoCabe']
    const empeladocabezahogar = taskForm['famiempleCabe']
    const cargocabezahogar = taskForm['CargoCabe']
    const empresacabezahogar = taskForm['EmpresaCabe']
    const saldocabezahogar = taskForm['SaldoCabe']
    const entidadsaludcabezahogar = taskForm['EntidadsaludCabe']
    const asosiacionescabezahogar = taskForm['AsociacionesCabe']
    const planeacionembarazo = taskForm[' embarazoCabe']
    const nombreyapellidoacudente = taskForm['nombre y apellidoAcu']
    const tipodecumentoacudente = taskForm['tipodocuAcu']
    const numerodecumentoacudente = taskForm['Numero de documentoAcu']
    const lugarnacimientoacudente = taskForm['LugarAcu']
    const fechanacimientoacudente = taskForm['fecha nacimientoAcu']
    const direccionacudente = taskForm['DirecciónVAcu']
    const barrioacudente = taskForm['BarrioAcu']
    const correoelectronicacudente = taskForm['CorreoAcu']
    const telefonoacudente = taskForm['Numero de TelefonoAcu']
    const celularacudente = taskForm['Numero de CelularAcu']
    const parentesacudente = taskForm['ParentescoAcu']
    const conflictoacudiente = taskForm['conflicto armadoAcu']
    const desastresacudiente = taskForm['desastres naturalesAcu']
    const discapacidadacudiente = taskForm['DiscapacidadAcu']
    const condicionespecialacudiente = taskForm['condicion especialAcu']
    const aporteacudiente = taskForm['aporteAcu']
    const saldoacudiente = taskForm['cuantoaporteAcu']
    const dignosticonutrcion = taskForm['nutricion']
    const desparacitacion = taskForm['nutri']
    const Fechadesparacitacion = taskForm['nutricionF']
    const afiliacionbeneficiario = taskForm['segusoc']
    const beneficiarioregimen = taskForm['regimen']
    const entidadpromotoradesalud = taskForm['entisa']
    const saludoral = taskForm['Salud oralBene']
    const oftalmologicos = taskForm['OftalmologicosBene']
    const audicion = taskForm['AudicionBene']
    const medicogeneral = taskForm['Medico generalBene']
    const problemassalud = taskForm['prosalud']
    const cualproblemassalud = taskForm['prosaludcua']
    const discapacidadbeneficiario = taskForm['disca']
    const cualdiscapacidadbeneficiario = taskForm['discacua']
    const registrodiscapacidad = taskForm['discaregis']
    const Psicosocial = taskForm['Psicosocial']
    const severidadPsicosocial = taskForm['severidadpisco']
    const cognitiva = taskForm['Cognitiva']
    const severidadcognitiva = taskForm['severidadCog']
    const sensorialvisual = taskForm['Sensorial visual']
    const severidadsensorialvisual = taskForm['severidadSen']
    const sensorialauditiva = taskForm['Sensorial auditiva']
    const severidadsensorialauditiva = taskForm['severidadaudi']
    const sensorialgusto = taskForm['Sensorial gusto, olfato y tacto']
    const severidadsensorialgusto = taskForm['severidadtacto']
    const movilidad = taskForm['Movilidad']
    const severidadmovilidad = taskForm['severidadMovi']
    const ayudaotrapersona = taskForm['Requiere ayuda']
    const severidadayudaotrapersona = taskForm['Requiere ayuda']
    const rehabilitacion = taskForm['rehabi']
    const frecuenciarehabilitacion = taskForm['frecue']
    const conflictobeneficiario = taskForm['conflicto armadoBene']
    const desastresbeneficiario = taskForm['desastres naturalesBene']
    const condicionespecialbeneficiario = taskForm['condicion especialBene']
    const pidecomida = taskForm['comipadre']
    const presentacionpersonal = taskForm['presenp']
    const presentaolores = taskForm['presenO']
    const frecuenciaenfermedades = taskForm['presenEn']
    const brotes = taskForm['presenRa']
    const temeroso = taskForm['teme']
    const interes = taskForm['interes']
    const aislamiento = taskForm['aisla']
    const espacaactividades = taskForm['acti']
    const agresivo = taskForm['agres']
    const destructor = taskForm['destr']
    const amistoso = taskForm[' amis']
    const comparte = taskForm['comp']
    const fluidez = taskForm['fluid']
    const cuidamedio = taskForm['cuid']
    const juegatranquilo = taskForm['jueg']
    const tareas = taskForm['tarea']
    const observacion = taskForm['Observaciones']








    savetask(
        nombreyapellidoBeneficiario.value,
        lugarnacimientoBeneficiario.value,
        fechanacimientoBeneficiario.value,
        tipoducmentoBeneficiario.value,
        numeroducmentoBeneficiario.value,
        generoBeneficiario.value,
        gruposanguineoBeneficiario.value,
        cursoBeneficiario.value,
        direccionBeneficiario.value,
        telefonoBeneficiario.value,
        celularBeneficiario.value,
        SisbenBeneficiario.value,
        seguridadsocialBeneficiario.value,
        redunidosBeneficiario.value,
        grupoetnico.value,
        victimaconflicto.value,
        padredesmovilizado.value,
        amenazadoreclutamiento.value,
        departamentoresidencia.value,
        municipioresidencia.value,
        zonaubicacionresidencia.value,
        direccionresidencia.value,
        barrioresidencia.value,
        tipodevivienda.value,
        tipodetendenciavivienda.value,
        tiempopermanecianucleocasa.value,
        numerodefamiliares.value,
        espaciosidependientescasa.value,
        acueductocasa.value,
        energiacasa.value,
        gasnaturalcasa.value,
        telefonocasa.value,
        alcantarilladocasa.value,
        internetcasa.value,
        obtencionagua.value,
        usanelagua.value,
        elminabasura.value,
        sanitario.value,
        viasacceso.value,
        transportepublcio.value,
        sedeeducativa.value,
        ludoteca.value,
        centrosalud.value,
        parques.value,
        nombreyapellidocabezahogar.value,
        tipodecumentocabezahogar.value,
        numerodecumentocabezahogar.value,
        lugarnacimientocabezahogar.value,
        fechanacimientocabezahogar.value,
        direccioncabezahogar.value,
        barriocabezahogar.value,
        correoelectronicocabezahogar.value,
        telefonocabezahogar.value,
        celularcabezahogar.value,
        parentescocabezahogar.value,
        sabeleercabezahogar.value,
        sabeescribircabezahogar.value,
        primariacabezahogar.value,
        secundariacabezahogar.value,
        tecniciocabezahogar.value,
        tecnologicocabezahogar.value,
        universidadcabezahogar.value,
        conflictocabezahogar.value,
        desastrescabezahogar.value,
        discapacidadcabezahogar.value,
        condicionespecialcabezahogar.value,
        familiasaccioncabezahogar.value,
        estadolaboralcabezahogar.value,
        empeladocabezahogar.value,
        cargocabezahogar.value,
        empresacabezahogar.value,
        saldocabezahogar.value,
        entidadsaludcabezahogar.value,
        asosiacionescabezahogar.value,
        nombreyapellidoacudente.value,
        tipodecumentoacudente.value,
        numerodecumentoacudente.value,
        lugarnacimientoacudente.value,
        fechanacimientoacudente.value,
        direccionacudente.value,
        barrioacudente.value,
        correoelectronicacudente.value,
        telefonoacudente.value,
        celularacudente.value,
        parentesacudente.value,
        conflictoacudiente.value,
        desastresacudiente.value,
        discapacidadacudiente.value,
        condicionespecialacudiente.value,
        aporteacudiente.value,
        saldoacudiente.value,
        dignosticonutrcion.value,
        desparacitacion.value,
        Fechadesparacitacion.value,
        afiliacionbeneficiario.value,
        beneficiarioregimen.value,
        entidadpromotoradesalud.value,
        saludoral.value,
        oftalmologicos.value,
        audicion.value,
        medicogeneral.value,
        problemassalud.value,
        cualproblemassalud.value,
        discapacidadbeneficiario.value,
        cualdiscapacidadbeneficiario.value,
        registrodiscapacidad.value,
        Psicosocial.value,
        severidadPsicosocial.value,
        cognitiva.value,
        severidadcognitiva.value,
        sensorialvisual.value,
        severidadsensorialvisual.value,
        sensorialauditiva.value,
        severidadsensorialauditiva.value,
        sensorialgusto.value,
        severidadsensorialgusto.value,
        movilidad.value,
        severidadmovilidad.value,
        ayudaotrapersona.value,
        severidadayudaotrapersona.value,
        rehabilitacion.value,
        frecuenciarehabilitacion.value,
        conflictobeneficiario.value,
        desastresbeneficiario.value,
        condicionespecialbeneficiario.value,
        pidecomida.value,
        presentacionpersonal.value,
        presentaolores.value,
        frecuenciaenfermedades.value,
        brotes.value,
        temeroso.value,
        interes.value,
        aislamiento.value,
        espacaactividades.value,
        agresivo.value,
        destructor.value,
        comparte.value,
        fluidez.value,
        cuidamedio.value,
        juegatranquilo.value,
        tareas.value,
        observacion.value,
    )

    taskForm.reset()

})