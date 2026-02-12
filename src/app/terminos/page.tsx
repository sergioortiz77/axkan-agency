import type { Metadata } from 'next';
import LegalLayout from '../../components/layout/LegalLayout';

export const metadata: Metadata = {
    title: 'Términos y Condiciones — Axkan',
    description: 'Términos de uso de la plataforma Axkan de consultoría de estrategia digital con IA.',
};

export default function TerminosPage() {
    return (
        <LegalLayout title="Términos y Condiciones" lastUpdated="12 de febrero de 2026">
            <h2>1. Aceptación de los Términos</h2>
            <p>
                Al acceder y utilizar la plataforma <strong>Axkan</strong> (en adelante, &quot;la Plataforma&quot;,
                &quot;el Servicio&quot;), usted acepta estar sujeto a estos Términos y Condiciones.
                Si no está de acuerdo con alguno de ellos, le solicitamos abstenerse de utilizar el Servicio.
            </p>

            <h2>2. Descripción del Servicio</h2>
            <p>
                Axkan es una plataforma de <strong>consultoría de estrategia digital asistida por inteligencia
                    artificial</strong>. El Servicio funciona bajo el modelo &quot;Resolver&quot; (meta-consultoría):
            </p>
            <ul>
                <li>Axkan <strong>prescribe</strong> herramientas y estrategias digitales basadas en las necesidades del usuario.</li>
                <li>Axkan <strong>no ejecuta</strong> tareas en nombre del usuario.</li>
                <li>Las recomendaciones se generan a partir de una base de datos curada y verificada de herramientas y flujos de trabajo.</li>
            </ul>

            <h2>3. Registro de Cuenta</h2>
            <p>Para acceder a ciertas funcionalidades, es necesario crear una cuenta. Al registrarse, usted se compromete a:</p>
            <ul>
                <li>Proporcionar información veraz, completa y actualizada.</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta.</li>
            </ul>
            <p>
                Nos reservamos el derecho de suspender o cancelar cuentas que incumplan estos términos
                o que se utilicen de forma fraudulenta.
            </p>

            <h2>4. Uso Aceptable</h2>
            <p>Al utilizar Axkan, usted se compromete a no:</p>
            <ul>
                <li>Utilizar el Servicio para actividades ilegales o que violen derechos de terceros.</li>
                <li>Intentar acceder a sistemas, datos o cuentas sin autorización.</li>
                <li>Realizar ingeniería inversa, descompilar o desensamblar el software.</li>
                <li>Utilizar bots, scrapers o herramientas automatizadas para extraer datos de la Plataforma sin autorización.</li>
                <li>Enviar contenido malicioso, ofensivo o que infrinja propiedad intelectual.</li>
            </ul>

            <h2>5. Propiedad Intelectual</h2>
            <p>
                Todo el contenido de la Plataforma — incluyendo pero no limitado a: diseño, código fuente,
                textos, logotipos, íconos y flujos de trabajo — es propiedad de <strong>Axkan</strong> o de sus respectivos
                licenciantes, y está protegido por las leyes de propiedad intelectual aplicables.
            </p>
            <p>
                Las herramientas y servicios de terceros recomendados por Axkan son propiedad de sus
                respectivos desarrolladores. Axkan no reclama propiedad sobre ellos.
            </p>

            <h2>6. Naturaleza de las Recomendaciones</h2>
            <p>
                <strong>Las recomendaciones generadas por Axkan son de carácter orientativo y no constituyen
                    asesoría profesional vinculante.</strong> El usuario es responsable de:
            </p>
            <ul>
                <li>Evaluar la idoneidad de cualquier herramienta o estrategia recomendada para su caso específico.</li>
                <li>Verificar las políticas de privacidad y seguridad de las herramientas antes de utilizarlas.</li>
                <li>Tomar decisiones informadas basadas en sus propias circunstancias y necesidades.</li>
            </ul>

            <h2>7. Enlaces de Afiliación</h2>
            <p>
                Axkan participa en programas de afiliación con plataformas de software como
                PartnerStack, Impact.com y programas directos. Cuando usted accede a una herramienta
                recomendada a través de nuestros enlaces:
            </p>
            <ul>
                <li>Axkan puede recibir una comisión por su registro o compra.</li>
                <li><strong>Esto no genera ningún costo adicional para usted.</strong></li>
                <li>Nuestras recomendaciones se basan en criterios objetivo (seguridad, costo, facilidad de uso, cumplimiento legal) y nunca en la existencia o magnitud de una comisión.</li>
            </ul>

            <h2>8. Disponibilidad del Servicio</h2>
            <p>
                Axkan se esfuerza por mantener la Plataforma disponible de forma continua. Sin embargo,
                no garantizamos un servicio ininterrumpido y nos reservamos el derecho de:
            </p>
            <ul>
                <li>Realizar mantenimientos programados o de emergencia.</li>
                <li>Modificar, suspender o descontinuar funcionalidades con previo aviso razonable.</li>
            </ul>

            <h2>9. Limitación de Responsabilidad</h2>
            <p>
                En la máxima medida permitida por la ley, <strong>Axkan no será responsable</strong> por:
            </p>
            <ul>
                <li>Daños directos, indirectos, incidentales o consecuentes derivados del uso del Servicio.</li>
                <li>Pérdidas resultantes de decisiones tomadas basándose en las recomendaciones generadas.</li>
                <li>Problemas con herramientas de terceros recomendadas por la Plataforma.</li>
                <li>Interrupciones del servicio por causas fuera de nuestro control (fuerza mayor, fallos de proveedores de infraestructura, etc.).</li>
            </ul>

            <h2>10. Planes y Suscripciones</h2>
            <p>
                Axkan puede ofrecer planes gratuitos y de pago. Los términos específicos de cada plan
                (precio, funcionalidades, límites) serán comunicados al momento de la contratación.
            </p>
            <ul>
                <li>Los pagos no son reembolsables salvo que la ley aplicable lo requiera.</li>
                <li>Nos reservamos el derecho de modificar precios con al menos 30 días de anticipación.</li>
            </ul>

            <h2>11. Legislación Aplicable y Jurisdicción</h2>
            <p>
                Estos Términos se rigen por las leyes de los <strong>Estados Unidos Mexicanos</strong>.
                Para la resolución de controversias, las partes se someten a la jurisdicción de los
                tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que
                pudiera corresponderles.
            </p>

            <h2>12. Modificaciones</h2>
            <p>
                Nos reservamos el derecho de modificar estos Términos en cualquier momento.
                Los cambios entrarán en vigor al ser publicados en esta página.
                El uso continuado del Servicio después de la publicación de cambios constituye
                la aceptación de los mismos.
            </p>

            <h2>13. Contacto</h2>
            <p>
                Para consultas sobre estos Términos y Condiciones, contáctenos en:{' '}
                <a href="mailto:legal@mxwithme.com">legal@mxwithme.com</a>
            </p>
        </LegalLayout>
    );
}
