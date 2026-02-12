import type { Metadata } from 'next';
import LegalLayout from '../../components/layout/LegalLayout';

export const metadata: Metadata = {
    title: 'Política de Privacidad — Axkan',
    description: 'Cómo Axkan protege y gestiona tus datos personales. Cumplimiento con LFPDPPP (México) y GDPR (UE).',
};

export default function PrivacidadPage() {
    return (
        <LegalLayout title="Política de Privacidad" lastUpdated="12 de febrero de 2026">
            <h2>1. Responsable del Tratamiento de Datos</h2>
            <p>
                <strong>Axkan</strong> (en adelante, &quot;nosotros&quot;, &quot;la Plataforma&quot;) es una plataforma de consultoría
                de estrategia digital con inteligencia artificial, operada desde México.
            </p>
            <p>
                Para efectos de la <strong>Ley Federal de Protección de Datos Personales en Posesión de los
                    Particulares (LFPDPPP)</strong> de México y el <strong>Reglamento General de Protección de Datos (GDPR)</strong> de
                la Unión Europea, Axkan es el responsable del tratamiento de sus datos personales.
            </p>
            <p>
                <strong>Contacto para asuntos de privacidad:</strong><br />
                Correo electrónico: <a href="mailto:privacidad@mxwithme.com">privacidad@mxwithme.com</a>
            </p>

            <h2>2. Datos Personales que Recopilamos</h2>
            <p>Recopilamos los siguientes datos dependiendo de cómo interactúes con la Plataforma:</p>

            <h3>2.1 Datos proporcionados directamente por el usuario</h3>
            <ul>
                <li><strong>Datos de registro:</strong> nombre completo, dirección de correo electrónico, nombre de empresa (opcional).</li>
                <li><strong>Datos de consulta:</strong> las preguntas y objetivos que describes al interactuar con nuestro asistente de IA.</li>
            </ul>

            <h3>2.2 Datos recopilados automáticamente</h3>
            <ul>
                <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo, páginas visitadas y tiempo de permanencia.</li>
                <li><strong>Cookies esenciales:</strong> utilizamos cookies estrictamente necesarias para el funcionamiento de la sesión. No utilizamos cookies de seguimiento publicitario de terceros.</li>
            </ul>

            <h2>3. Finalidades del Tratamiento</h2>
            <p>Sus datos personales serán utilizados para:</p>
            <ul>
                <li><strong>Prestación del servicio:</strong> generar diagnósticos, prescripciones de herramientas y estrategias personalizadas.</li>
                <li><strong>Gestión de cuenta:</strong> crear y administrar su perfil de usuario.</li>
                <li><strong>Mejora del servicio:</strong> analizar patrones de uso agregados (nunca individuales) para mejorar la calidad de las recomendaciones.</li>
                <li><strong>Comunicaciones:</strong> enviar notificaciones relacionadas con el servicio, solo si ha dado su consentimiento explícito.</li>
                <li><strong>Cumplimiento legal:</strong> atender requerimientos de autoridades competentes.</li>
            </ul>

            <h2>4. Base Legal del Tratamiento</h2>
            <p>Tratamos sus datos bajo las siguientes bases legales:</p>
            <ul>
                <li><strong>Consentimiento:</strong> otorgado al crear su cuenta y aceptar estos términos.</li>
                <li><strong>Ejecución del contrato:</strong> necesario para prestar el servicio de consultoría digital.</li>
                <li><strong>Interés legítimo:</strong> mejora continua de la plataforma mediante análisis agregados.</li>
            </ul>

            <h2>5. Compartición de Datos con Terceros</h2>
            <p>
                Axkan <strong>no vende, alquila ni comercializa</strong> sus datos personales. Podemos compartir
                datos únicamente con:
            </p>
            <ul>
                <li><strong>Proveedores de infraestructura:</strong> servicios de hosting (Netlify), base de datos (Supabase) y autenticación, bajo acuerdos de confidencialidad.</li>
                <li><strong>Herramientas recomendadas:</strong> cuando usted hace clic en un enlace a una herramienta recomendada, será redirigido al sitio web de dicha herramienta. <strong>No compartimos sus datos personales con estas herramientas.</strong> Algunos enlaces pueden contener parámetros de seguimiento de afiliación que nos identifican como fuente de referencia, pero nunca incluyen su información personal.</li>
            </ul>

            <h2>6. Enlaces de Afiliación — Transparencia</h2>
            <p>
                Axkan participa en programas de afiliación con plataformas de software. Esto significa que
                cuando recomendamos una herramienta y usted decide adquirirla a través de nuestro enlace,
                Axkan puede recibir una comisión. <strong>Esto no afecta el precio que usted paga.</strong>
            </p>
            <p>
                Nuestras recomendaciones se basan exclusivamente en criterios objetivos: seguridad, costo,
                facilidad de uso y cumplimiento legal. La existencia de un programa de afiliación
                <strong> nunca</strong> es el factor determinante para recomendar una herramienta.
            </p>

            <h2>7. Derechos ARCO (LFPDPPP — México)</h2>
            <p>
                Conforme a la legislación mexicana, usted tiene en todo momento los derechos de <strong>Acceso,
                    Rectificación, Cancelación y Oposición</strong> (derechos ARCO) respecto a sus datos personales.
                Para ejercerlos, envíe una solicitud a:{' '}
                <a href="mailto:privacidad@mxwithme.com">privacidad@mxwithme.com</a>
            </p>
            <p>Responderemos en un plazo máximo de 20 días hábiles.</p>

            <h2>8. Derechos bajo GDPR (Unión Europea)</h2>
            <p>Si usted reside en la Unión Europea, adicionalmente tiene derecho a:</p>
            <ul>
                <li>Solicitar la <strong>portabilidad</strong> de sus datos en formato estructurado.</li>
                <li>Solicitar la <strong>eliminación</strong> completa de sus datos (&quot;derecho al olvido&quot;).</li>
                <li>Retirar su consentimiento en cualquier momento sin que esto afecte la licitud del tratamiento previo.</li>
                <li>Presentar una queja ante la autoridad de protección de datos de su país.</li>
            </ul>

            <h2>9. Seguridad de los Datos</h2>
            <p>Implementamos las siguientes medidas de seguridad:</p>
            <ul>
                <li>Comunicaciones cifradas mediante <strong>HTTPS/TLS</strong> en toda la plataforma.</li>
                <li>Base de datos con <strong>cifrado en reposo</strong>.</li>
                <li>Control de acceso basado en roles.</li>
                <li>No almacenamos contraseñas en texto plano — utilizamos proveedor de autenticación con hashing seguro.</li>
            </ul>

            <h2>10. Retención de Datos</h2>
            <p>
                Conservamos sus datos personales mientras su cuenta esté activa. Si solicita la
                eliminación de su cuenta, sus datos serán eliminados en un plazo de 30 días naturales,
                salvo obligación legal de retención.
            </p>

            <h2>11. Modificaciones a esta Política</h2>
            <p>
                Nos reservamos el derecho de actualizar esta política. Cualquier cambio
                será publicado en esta página con la fecha de actualización correspondiente.
                Para cambios sustanciales, notificaremos a los usuarios registrados por correo electrónico.
            </p>
        </LegalLayout>
    );
}
