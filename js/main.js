// ==========================================
// 1. SISTEMA DE IDIOMAS (ES / EN / SR)
// ==========================================
const traducciones = {
  es: {
    // Generales
    logo: 'Sarah Natera <span>Clínica Estética</span>',
    logo_footer: 'Sarah Natera · Clínica Estética',
    nav_inicio: 'Inicio', nav_resultados: 'Resultados', nav_contacto: 'Contacto', nav_about: 'Sobre mí', nav_suscribete: 'Suscríbete',
    btn_cita: 'Pedir cita', 
    footer_desc: 'Estética facial y corporal con enfoque médico y natural.',
    footer_nav: 'Navegación', footer_contacto: 'Contacto', 
    footer_copy: 'Sarah Natera. Todos los derechos reservados.',
    
    // Index
    hero_titulo: 'Belleza natural, resultados reales',
    hero_sub: 'Tratamientos faciales y corporales personalizados, con protocolos médicos y acompañamiento en cada paso.',
    btn_resultados: 'Ver resultados',
    porque_titulo: 'Por qué elegirnos',
    card1_titulo: 'Protocolo médico', card1_texto: 'Diagnóstico previo y plan personalizado. Sin promesas imposibles, con información clara de cada tratamiento.',
    card2_titulo: 'Resultados reales', card2_texto: 'Galería de antes y después con consentimiento de cada paciente y sin retoques ni filtros.',
    card3_titulo: 'Acompañamiento', card3_texto: 'Seguimiento posterior y pautas de cuidado para mantener los resultados en el tiempo.',
    slider_titulo: 'Un caso, dos momentos',
    slider_sub: 'Arrastra el divisor para comparar. Imágenes publicadas con consentimiento expreso, sin retoques.',
    label_antes: 'Antes', label_despues: 'Después',
    slider_meta: 'Tratamiento para líneas de la frente con Botox.', btn_todos_casos: 'Ver todos los casos',
    
    // Resultados
    res_titulo: 'Resultados reales',
    res_sub: 'Imágenes sin retoques, con consentimiento expreso de cada paciente. Arrastra el divisor para comparar antes y después.',
    res_meta1: 'Tratamiento para líneas de la frente con Botox.',
    res_meta2: 'Tratamiento de líneas alrededor de los ojos con Botox y levantamiento de la cola de la ceja.',
    res_meta3: 'Aumento de labios con ácido hialurónico.',
    res_meta4: 'Tratamiento de surcos nasogenianos y aumento de labios con ácido hialurónico.',
    res_meta5: 'Tratamiento de surcos nasogenianos y aumento de labios con ácido hialurónico.',
    res_meta6: 'Aumento de labios con ácido hialurónico y tratamiento con microneedling.',
    res_meta7: 'Aumento de labios y tratamiento de surcos nasogenianos y líneas de la marioneta con ácido hialurónico.',
    res_meta8: 'Tres sesiones de microneedling y aumento de labios con ácido hialurónico.',
    res_meta9: 'Tratamiento de líneas alrededor de los labios y aumento de labios con ácido hialurónico.',
    res_meta10: 'Aumento de labios con ácido hialurónico.',
    res_meta11: 'Tratamiento de líneas de la frente y levantamiento de la cola de la ceja con Dysport.',
    res_meta12: 'Reposición del volumen del tercio inferior del rostro con ácido hialurónico.',
    res_meta13: 'Aumento de labios con ácido hialurónico.',
    res_meta14: 'Tratamiento de surcos nasogenianos, líneas de la marioneta y líneas alrededor de los labios con ácido hialurónico.',
    res_meta15: 'Tratamiento de líneas del entrecejo con Dysport.',
    res_meta16: 'Limpieza facial profunda con HydraFacial Syndeo.',
    res_meta17: 'Aumento de labios y tratamiento de líneas alrededor de los labios con ácido hialurónico.',
    res_meta18: 'Tratamiento de surcos nasogenianos y líneas de la marioneta con ácido hialurónico.',
    res_cta_titulo: '¿Quieres saber si es para ti?',
    res_cta_texto: 'Cada caso es distinto. En consulta valoramos tu punto de partida y te explicamos expectativas reales, sesiones necesarias y cuidados posteriores.',
    
    // Contacto
    cont_titulo: 'Pide tu cita',
    cont_sub: 'Nos pondremos en contacto contigo en menos de 24 horas.',
    form_nombre: 'Nombre completo', form_nombre_ph: 'Tu nombre',
    form_email: 'Email', form_email_ph: 'tu@email.com',
    form_tel: 'Teléfono', form_tel_ph: '+381 60 000 0000',
    form_tratamiento: 'Tratamiento de interés',
    form_opt_general: 'Consulta general',
    form_opt_facial: 'Tratamiento facial',
    form_opt_corporal: 'Tratamiento corporal',
    form_mensaje: 'Mensaje', form_mensaje_ph: '¿En qué podemos ayudarte?',
    form_btn: 'Enviar solicitud',

    // About me
    about_titulo: 'Sarah Natera',
    about_sub: 'Médico Cirujano especializada en medicina estética facial. Años de dedicación exclusiva, formación internacional y una mirada natural.',
    about_trayectoria_titulo: 'Una médico dedicada a la estética',
    about_trayectoria_texto1: 'La Dra. Sarah Natera es <strong>Médico Cirujano</strong>, no solo es una aplicadora de tratamientos. Su carrera se ha centrado durante años de forma exclusiva en la medicina estética facial y corporal, combinando la práctica clínica de alta gama con la formación de otros médicos a nivel global.',
    about_trayectoria_texto2: 'Originaria de Venezuela, ha desarrollado su carrera internacionalmente y hoy ejerce en Europa, concretamente en <strong>Serbia</strong> (área metropolitana de Belgrado), donde dirige su práctica privada y sus proyectos médicos.',
    about_confiar_titulo: 'Por qué confiar en la Dra. Sarah Natera',
    about_confiar_1: '<strong>Médico especializada en estética.</strong> No se trata solo de aplicar tratamientos, sino de hacerlo con el respaldo de un profesional. Su formación médica le permite comprender la anatomía facial en profundidad, diagnosticar con rigor y ofrecer la seguridad que necesitas, combinada con la sensibilidad estética de quien se dedica a embellecer el rostro.',
    about_confiar_2: '<strong>Dedicación exclusiva a la estética.</strong> Lleva años enfocada exclusivamente en procedimientos estéticos, perfeccionando su técnica en más de 6.000 tratamientos inyectables realizados.',
    about_confiar_3: '<strong>Formación de élite.</strong> Es <em>Worldwide Trainer</em> para Galderma Aesthetics, una de las farmacéuticas de estética más importantes del mundo. No solo aplica los tratamientos, sino que enseña a otros médicos a hacerlos con los más altos estándares.',
    about_confiar_4: '<strong>Visión global, trato exclusivo.</strong> Dirigió clínicas en cruceros de lujo y ha ejercido en múltiples continentes. Esa experiencia internacional se traduce hoy en una atención personalizada y de primer nivel en su consulta de Belgrado.',
    about_filosofia_titulo: 'El arte de la naturalidad',
    about_filosofia_texto: 'Creo en la belleza que no grita, sino que susurra. Mi objetivo no es transformar rostros, sino realzar la identidad de cada paciente con armonía y absoluto respeto por la anatomía. Domino las técnicas de armonización para que los resultados se vean frescos, descansados y absolutamente naturales. <strong>Nadie notará que te has hecho un tratamiento, solo que te ves mejor.</strong>',
    about_cta_titulo: '¿Hablamos de tu caso?',
    about_cta_texto: 'Reserva una consulta personalizada con la Dra. Sarah Natera y descubre cómo podemos realzar tu belleza natural con los más altos estándares médicos.',

    // Suscríbete y Gracias
    sub_titulo: 'Mantente al día',
    sub_sub: 'Suscríbete para recibir información exclusiva sobre próximos cursos, masterclasses y novedades de la clínica.',
    sub_nombre: 'Nombre completo', sub_nombre_ph: 'Tu nombre completo',
    sub_email: 'Correo electrónico', sub_email_ph: 'tu@email.com',
    sub_profesion: 'Profesión o especialidad (Opcional)', sub_profesion_ph: 'Ej. Médico estético, Dermatólogo, etc.',
    sub_acepto: 'Acepto los', sub_terminos_link: 'términos y condiciones', sub_terminos_texto: 'y el uso de mi correo con fines publicitarios de la clínica y terceros.',
    sub_btn: 'Suscribirme',
    modal_titulo: 'Términos y Condiciones',
    modal_texto1: 'Al suscribirte, aceptas que Sarah Natera Clínica Estética almacene tu nombre y correo electrónico en su base de datos.',
    modal_texto2: 'El uso de tu correo electrónico será exclusivamente para enviarte información sobre próximos cursos, masterclasses, newsletters y promociones de nuestra clínica, así como de terceros colaboradores.',
    modal_texto3: 'Puedes darte de baja de esta lista en cualquier momento haciendo clic en el enlace de "darse de baja" que aparecerá al final de cada correo que te enviemos. Tus datos no serán vendidos a otras empresas.',
    gracias_titulo: '¡Gracias por suscribirte!',
    gracias_texto: 'Tu correo ha quedado registrado. Muy pronto recibirás noticias sobre nuestros próximos cursos, masterclasses y novedades de la clínica.',
    gracias_btn: 'Volver al inicio'
  },
  
  en: {
    // Generales
    logo: 'Sarah Natera <span>Aesthetic Clinic</span>',
    logo_footer: 'Sarah Natera · Aesthetic Clinic',
    nav_inicio: 'Home', nav_resultados: 'Results', nav_contacto: 'Contact', nav_about: 'About me', nav_suscribete: 'Subscribe',
    btn_cita: 'Book appointment', 
    footer_desc: 'Facial and body aesthetics with a medical and natural approach.',
    footer_nav: 'Navigation', footer_contacto: 'Contact', 
    footer_copy: 'Sarah Natera. All rights reserved.',
    
    // Index
    hero_titulo: 'Natural beauty, real results',
    hero_sub: 'Personalized facial and body treatments, with medical protocols and support at every step.',
    btn_resultados: 'See results',
    porque_titulo: 'Why choose us',
    card1_titulo: 'Medical protocol', card1_texto: 'Prior diagnosis and personalized plan. No impossible promises, with clear information about each treatment.',
    card2_titulo: 'Real results', card2_texto: 'Before and after gallery with each patient\'s consent and no retouching or filters.',
    card3_titulo: 'Support', card3_texto: 'Post-treatment follow-up and care guidelines to maintain results over time.',
    slider_titulo: 'One case, two moments',
    slider_sub: 'Drag the slider to compare. Images published with express consent, no retouching.',
    label_antes: 'Before', label_despues: 'After',
    slider_meta: 'Forehead line treatment with Botox.', btn_todos_casos: 'See all cases',
    
    // Resultados
    res_titulo: 'Real results',
    res_sub: 'Unretouched images, with express consent from each patient. Drag the slider to compare before and after.',
    res_meta1: 'Forehead line treatment with Botox.',
    res_meta2: 'Eye area line treatment with Botox and eyebrow tail lift.',
    res_meta3: 'Lip augmentation with hyaluronic acid.',
    res_meta4: 'Nasolabial fold treatment and lip augmentation with hyaluronic acid.',
    res_meta5: 'Nasolabial fold treatment and lip augmentation with hyaluronic acid.',
    res_meta6: 'Lip augmentation with hyaluronic acid and microneedling treatment.',
    res_meta7: 'Lip augmentation and treatment of nasolabial folds and marionette lines with hyaluronic acid.',
    res_meta8: 'Three sessions of microneedling and lip augmentation with hyaluronic acid.',
    res_meta9: 'Perioral line treatment and lip augmentation with hyaluronic acid.',
    res_meta10: 'Lip augmentation with hyaluronic acid.',
    res_meta11: 'Forehead line treatment and eyebrow tail lift with Dysport.',
    res_meta12: 'Lower face volume restoration with hyaluronic acid.',
    res_meta13: 'Lip augmentation with hyaluronic acid.',
    res_meta14: 'Treatment of nasolabial folds, marionette lines and perioral lines with hyaluronic acid.',
    res_meta15: 'Glabellar line treatment with Dysport.',
    res_meta16: 'Deep facial cleansing with HydraFacial Syndeo.',
    res_meta17: 'Lip augmentation and perioral line treatment with hyaluronic acid.',
    res_meta18: 'Nasolabial fold and marionette line treatment with hyaluronic acid.',
    res_cta_titulo: 'Want to know if it\'s for you?',
    res_cta_texto: 'Each case is different. In consultation we assess your starting point and explain realistic expectations, necessary sessions and aftercare.',
    
    // Contacto
    cont_titulo: 'Book your appointment',
    cont_sub: 'We will contact you within 24 hours.',
    form_nombre: 'Full name', form_nombre_ph: 'Your name',
    form_email: 'Email', form_email_ph: 'you@email.com',
    form_tel: 'Phone', form_tel_ph: '+381 60 000 0000',
    form_tratamiento: 'Treatment of interest',
    form_opt_general: 'General consultation',
    form_opt_facial: 'Facial treatment',
    form_opt_corporal: 'Body treatment',
    form_mensaje: 'Message', form_mensaje_ph: 'How can we help you?',
    form_btn: 'Send request',

    // About me
    about_titulo: 'Sarah Natera',
    about_sub: 'Medical Doctor specialized in facial aesthetic medicine. Years of exclusive dedication, international training, and a natural approach.',
    about_trayectoria_titulo: 'A physician dedicated to aesthetics',
    about_trayectoria_texto1: 'Dr. Sarah Natera is a <strong>Medical Doctor</strong>, not just a treatment applicator. Her career has been exclusively focused for years on facial and body aesthetic medicine, combining high-end clinical practice with the training of other physicians globally.',
    about_trayectoria_texto2: 'Originally from Venezuela, she has developed her career internationally and today practices in Europe, specifically in <strong>Serbia</strong> (Belgrade metropolitan area), where she runs her private practice and medical projects.',
    about_confiar_titulo: 'Why trust Dr. Sarah Natera',
    about_confiar_1: '<strong>Physician specialized in aesthetics.</strong> It\'s not just about applying treatments, but doing so with the backing of a professional. Her medical training allows her to understand facial anatomy in depth, diagnose rigorously, and offer the safety you need, combined with the aesthetic sensitivity of someone dedicated to enhancing the face.',
    about_confiar_2: '<strong>Exclusive dedication to aesthetics.</strong> She has spent years exclusively focused on aesthetic procedures, perfecting her technique through over 6,000 injectable treatments performed.',
    about_confiar_3: '<strong>Elite training.</strong> She is a <em>Worldwide Trainer</em> for Galderma Aesthetics, one of the most important aesthetic pharmaceutical companies in the world. She doesn\'t just apply treatments; she teaches other physicians to perform them to the highest standards.',
    about_confiar_4: '<strong>Global vision, exclusive care.</strong> She has directed clinics on luxury cruise lines and practiced across multiple continents. That international experience now translates into personalized, first-class care at her Belgrade clinic.',
    about_filosofia_titulo: 'The art of naturalness',
    about_filosofia_texto: 'I believe in beauty that whispers, not shouts. My goal is not to transform faces, but to enhance each patient\'s identity with harmony and absolute respect for anatomy. I master harmonization techniques so results look fresh, rested, and absolutely natural. <strong>No one will notice you\'ve had a treatment, only that you look better.</strong>',
    about_cta_titulo: 'Shall we discuss your case?',
    about_cta_texto: 'Book a personalized consultation with Dr. Sarah Natera and discover how we can enhance your natural beauty with the highest medical standards.',

    // Suscríbete y Gracias
    sub_titulo: 'Stay up to date',
    sub_sub: 'Subscribe to receive exclusive information about upcoming courses, masterclasses and clinic news.',
    sub_nombre: 'Full name', sub_nombre_ph: 'Your full name',
    sub_email: 'Email address', sub_email_ph: 'you@email.com',
    sub_profesion: 'Profession or specialty (Optional)', sub_profesion_ph: 'E.g. Aesthetic doctor, Dermatologist, etc.',
    sub_acepto: 'I accept the', sub_terminos_link: 'terms and conditions', sub_terminos_texto: 'and the use of my email for advertising purposes by the clinic and third parties.',
    sub_btn: 'Subscribe',
    modal_titulo: 'Terms and Conditions',
    modal_texto1: 'By subscribing, you agree that Sarah Natera Aesthetic Clinic stores your name and email address in its database.',
    modal_texto2: 'Your email address will be used exclusively to send you information about upcoming courses, masterclasses, newsletters and promotions from our clinic, as well as from third-party collaborators.',
    modal_texto3: 'You can unsubscribe from this list at any time by clicking the "unsubscribe" link at the bottom of every email we send you. Your data will not be sold to other companies.',
    gracias_titulo: 'Thank you for subscribing!',
    gracias_texto: 'Your email has been registered. Very soon you will receive news about our upcoming courses, masterclasses and clinic updates.',
    gracias_btn: 'Back to home'
  },
  
  sr: {
    // Generales
    logo: 'Sarah Natera <span>Estetska Klinika</span>',
    logo_footer: 'Sarah Natera · Estetska Klinika',
    nav_inicio: 'Početna', nav_resultados: 'Rezultati', nav_contacto: 'Kontakt', nav_about: 'O meni', nav_suscribete: 'Pretplati se',
    btn_cita: 'Zakažite termin', 
    footer_desc: 'Estetika lica i tela sa medicinskim i prirodnim pristupom.',
    footer_nav: 'Navigacija', footer_contacto: 'Kontakt', 
    footer_copy: 'Sarah Natera. Sva prava zadržana.',
    
    // Index
    hero_titulo: 'Prirodna lepota, pravi rezultati',
    hero_sub: 'Personalizovani tretmani lica i tela, sa medicinskim protokolima i podrškom na svakom koraku.',
    btn_resultados: 'Pogledajte rezultate',
    porque_titulo: 'Zašto izabrati nas',
    card1_titulo: 'Medicinski protokol', card1_texto: 'Prethodna dijagnoza i personalizovani plan. Bez nemogućih obećanja, sa jasnim informacijama o svakom tretmanu.',
    card2_titulo: 'Pravi rezultati', card2_texto: 'Galerija pre i posle sa pristankom svakog pacijenta i bez retuširanja ili filtera.',
    card3_titulo: 'Podrška', card3_texto: 'Praćenje nakon tretmana i smernice za negu radi održavanja rezultata tokom vremena.',
    slider_titulo: 'Jedan slučaj, dva trenutka',
    slider_sub: 'Povucite klizač da biste uporedili. Slike su objavljene uz izričitu saglasnost, bez retuširanja.',
    label_antes: 'Pre', label_despues: 'Posle',
    slider_meta: 'Tretman bora na čelu Botoxom.', btn_todos_casos: 'Pogledajte sve slučajeve',
    
    // Resultados
    res_titulo: 'Pravi rezultati',
    res_sub: 'Neobrađene slike, uz izričitu saglasnost svakog pacijenta. Povucite klizač da biste uporedili pre i posle.',
    res_meta1: 'Tretman bora na čelu Botoxom.',
    res_meta2: 'Tretman bora oko očiju Botoxom i podizanje repa obrve.',
    res_meta3: 'Povećanje usana hijaluronskom kiselinom.',
    res_meta4: 'Tretman nazolabijalnih bora i povećanje usana hijaluronskom kiselinom.',
    res_meta5: 'Tretman nazolabijalnih bora i povećanje usana hijaluronskom kiselinom.',
    res_meta6: 'Povećanje usana hijaluronskom kiselinom i tretman mikronidlingom.',
    res_meta7: 'Povećanje usana i tretman nazolabijalnih bora i bora marionete hijaluronskom kiselinom.',
    res_meta8: 'Tri sesije mikronidlinga i povećanje usana hijaluronskom kiselinom.',
    res_meta9: 'Tretman bora oko usana i povećanje usana hijaluronskom kiselinom.',
    res_meta10: 'Povećanje usana hijaluronskom kiselinom.',
    res_meta11: 'Tretman bora na čelu i podizanje repa obrve Dysportom.',
    res_meta12: 'Obnavljanje volumena donje trećine lica hijaluronskom kiselinom.',
    res_meta13: 'Povećanje usana hijaluronskom kiselinom.',
    res_meta14: 'Tretman nazolabijalnih bora, bora marionete i bora oko usana hijaluronskom kiselinom.',
    res_meta15: 'Tretman bora između obrva Dysportom.',
    res_meta16: 'Dubinsko čišćenje lica HydraFacial Syndeo.',
    res_meta17: 'Povećanje usana i tretman bora oko usana hijaluronskom kiselinom.',
    res_meta18: 'Tretman nazolabijalnih bora i bora marionete hijaluronskom kiselinom.',
    res_cta_titulo: 'Želite da znate da li je za vas?',
    res_cta_texto: 'Svaki slučaj je drugačiji. Na konsultacijama procenjujemo vašu početnu tačku i objašnjavamo realna očekivanja, potrebne sesije i negu nakon tretmana.',
    
    // Contacto
    cont_titulo: 'Zakažite termin',
    cont_sub: 'Kontaktiraćemo vas u roku od 24 sata.',
    form_nombre: 'Ime i prezime', form_nombre_ph: 'Vaše ime',
    form_email: 'Email', form_email_ph: 'vi@email.com',
    form_tel: 'Telefon', form_tel_ph: '+381 60 000 0000',
    form_tratamiento: 'Tretman koji vas zanima',
    form_opt_general: 'Opšta konsultacija',
    form_opt_facial: 'Tretman lica',
    form_opt_corporal: 'Tretman tela',
    form_mensaje: 'Poruka', form_mensaje_ph: 'Kako možemo da vam pomognemo?',
    form_btn: 'Pošalji zahtev',

    // About me
    about_titulo: 'Sarah Natera',
    about_sub: 'Doktor medicine specijalizovana za estetsku medicinu lica. Godine posvećenosti, međunarodna obuka i prirodan pristup.',
    about_trayectoria_titulo: 'Lekar posvećen estetici',
    about_trayectoria_texto1: 'Dr Sarah Natera je <strong>doktor medicine</strong>, ne samo aplikator tretmana. Njena karijera je godinama isključivo fokusirana na estetsku medicinu lica i tela, kombinujući vrhunsku kliničku praksu sa obukom drugih lekara na globalnom nivou.',
    about_trayectoria_texto2: 'Poreklom iz Venecuele, svoju karijeru je razvijala na međunarodnom nivou i danas radi u Evropi, tačnije u <strong>Srbiji</strong> (beogradska metropolitanska oblast), gde vodi svoju privatnu praksu i medicinske projekte.',
    about_confiar_titulo: 'Zašto verovati dr Sarah Natera',
    about_confiar_1: '<strong>Lekar specijalizovan za estetiku.</strong> Ne radi se samo o primeni tretmana, već o tome da se to radi uz podršku profesionalca. Njena medicinska obuka joj omogućava da dubinski razume anatomiju lica, rigorozno dijagnostikuje i pruži sigurnost koja vam je potrebna, kombinovanu sa estetskom osetljivošću nekoga ko se posvećuje ulepšavanju lica.',
    about_confiar_2: '<strong>Isključiva posvećenost estetici.</strong> Godinama je isključivo fokusirana na estetske procedure, usavršavajući svoju tehniku kroz više od 6.000 injekcionih tretmana.',
    about_confiar_3: '<strong>Vrhunska obuka.</strong> Ona je <em>Worldwide Trainer</em> za Galderma Aesthetics, jednu od najvažnijih farmaceutskih kompanija u estetici na svetu. Ne samo da primenjuje tretmane, već i obučava druge lekare da ih sprovode po najvišim standardima.',
    about_confiar_4: '<strong>Globalna vizija, ekskluzivna nega.</strong> Vodila je klinike na luksuznim kruzerima i radila na više kontinenata. To međunarodno iskustvo danas se prevodi u personalizovanu negu prvog reda u njenoj klinici u Beogradu.',
    about_filosofia_titulo: 'Umetnost prirodnosti',
    about_filosofia_texto: 'Verujem u lepotu koja šapuće, a ne viče. Moj cilj nije da transformišem lica, već da naglasim identitet svakog pacijenta uz harmoniju i apsolutno poštovanje anatomije. Savladavam tehnike harmonizacije tako da rezultati izgledaju sveže, odmorno i potpuno prirodno. <strong>Niko neće primetiti da ste imali tretman, samo da izgledate bolje.</strong>',
    about_cta_titulo: 'Hajde da razgovaramo o vašem slučaju?',
    about_cta_texto: 'Zakažite personalizovanu konsultaciju sa dr Sarah Naterom i otkrijte kako možemo da naglasimo vašu prirodnu lepotu uz najviše medicinske standarde.',

    // Suscríbete y Gracias
    sub_titulo: 'Budite u toku',
    sub_sub: 'Pretplatite se da biste primali ekskluzivne informacije o predstojećim kursevima, masterklasama i novostima iz klinike.',
    sub_nombre: 'Ime i prezime', sub_nombre_ph: 'Vaše ime i prezime',
    sub_email: 'Email adresa', sub_email_ph: 'vi@email.com',
    sub_profesion: 'Profesija ili specijalnost (Opcionalno)', sub_profesion_ph: 'Npr. estetski lekar, dermatolog, itd.',
    sub_acepto: 'Prihvatam', sub_terminos_link: 'uslove i odredbe', sub_terminos_texto: 'i korišćenje moje email adrese u reklamne svrhe klinike i trećih lica.',
    sub_btn: 'Pretplati se',
    modal_titulo: 'Uslovi i odredbe',
    modal_texto1: 'Pretplatom se slažete da Estetska klinika Sarah Natera čuva vaše ime i email adresu u svojoj bazi podataka.',
    modal_texto2: 'Vaša email adresa će se koristiti isključivo za slanje informacija o predstojećim kursevima, masterklasama, biltenima i promocijama naše klinike, kao i trećih saradnika.',
    modal_texto3: 'Možete se odjaviti sa ove liste u bilo kom trenutku klikom na link "odjavi se" koji se nalazi na dnu svakog emaila koji vam pošaljemo. Vaši podaci neće biti prodati drugim kompanijama.',
    gracias_titulo: 'Hvala što ste se pretplatili!',
    gracias_texto: 'Vaša email adresa je registrovana. Vrlo brzo ćete primati vesti o našim predstojećim kursevima, masterklasama i novostima iz klinike.',
    gracias_btn: 'Povratak na početnu'
  }
};

// Función que cambia los textos de la página
function cambiarIdioma(idioma) {
  // Guardar preferencia
  localStorage.setItem('idiomaClinica', idioma);
  
  // Actualizar banderas visuales
  document.querySelectorAll('.lang-switcher a').forEach(el => el.classList.remove('active'));
  const banderaActiva = document.querySelector(`.lang-switcher a[onclick="cambiarIdioma('${idioma}'); return false;"]`);
  if (banderaActiva) banderaActiva.classList.add('active');

  // Cambiar los textos (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const clave = el.getAttribute('data-i18n');
    if (traducciones[idioma] && traducciones[idioma][clave]) {
      el.innerHTML = traducciones[idioma][clave]; 
    }
  });

  // Cambiar los placeholders (data-i18n-placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const clave = el.getAttribute('data-i18n-placeholder');
    if (traducciones[idioma] && traducciones[idioma][clave]) {
      el.placeholder = traducciones[idioma][clave];
    }
  });
  
  // Cambiar el atributo lang del HTML
  document.documentElement.lang = idioma;
}

// Al cargar la página, recuperar el idioma guardado y actualizar el año
window.addEventListener('DOMContentLoaded', () => {
  // 1. Idioma guardado
  const idiomaGuardado = localStorage.getItem('idiomaClinica') || 'es';
  if (idiomaGuardado !== 'es') {
    cambiarIdioma(idiomaGuardado);
  }

  // 2. Actualizar el año del copyright automáticamente
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// ==========================================
// 2. Menú móvil
// ==========================================
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

// ==========================================
// 3. Slider comparador antes/después
// ==========================================
document.querySelectorAll('.compare').forEach(el => {
  // 'img.after' protege las etiquetas de texto
  const after = el.querySelector('img.after');
  const handle = el.querySelector('.handle');
  if (!after || !handle) return;

  let dragging = false;

  const move = x => {
    const rect = el.getBoundingClientRect();
    let pct = ((x - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct)); // Límites para no perder el divisor
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = pct + '%';
  };

  const start = e => { dragging = true; move(e.clientX); };
  const end = () => { dragging = false; };
  const drag = e => { if (!dragging) return; move(e.clientX); };
  
  const touchStart = e => { dragging = true; move(e.touches[0].clientX); };
  const touchMove = e => { if (!dragging) return; move(e.touches[0].clientX); };

  el.addEventListener('mousedown', start);
  el.addEventListener('touchstart', touchStart, { passive: true });
  window.addEventListener('mouseup', end);
  window.addEventListener('touchend', end);
  window.addEventListener('mousemove', drag);
  window.addEventListener('touchmove', touchMove, { passive: true });
});
