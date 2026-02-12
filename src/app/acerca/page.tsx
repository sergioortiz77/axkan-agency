import type { Metadata } from 'next';
import LegalLayout from '../../components/layout/LegalLayout';

export const metadata: Metadata = {
    title: 'Acerca de — Axkan',
    description: 'Conoce qué es Axkan, cómo funciona y por qué es diferente a un chatbot genérico de IA.',
};

export default function AcercaPage() {
    return (
        <LegalLayout title="Acerca de Axkan" lastUpdated="12 de febrero de 2026">
            <h2>¿Qué es Axkan?</h2>
            <p>
                Axkan es una <strong>plataforma de consultoría de estrategia digital</strong> potenciada
                por inteligencia artificial. A diferencia de un chatbot genérico, Axkan funciona como
                un <strong>Consultor Senior</strong> que analiza tus necesidades y prescribe las herramientas
                y estrategias más adecuadas para tu negocio o proyecto.
            </p>

            <h2>¿Cómo funciona?</h2>
            <p>Axkan opera bajo el modelo <strong>&quot;Resolver&quot;</strong> (meta-consultoría):</p>
            <ul>
                <li><strong>Tú describes tu desafío</strong> — &quot;Necesito un CRM asequible&quot;, &quot;Quiero automatizar mi marketing&quot;, &quot;Busco una herramienta de IA para mi equipo&quot;.</li>
                <li><strong>Axkan diagnostica</strong> — Analiza tu consulta considerando tu nivel técnico, presupuesto y requisitos de seguridad y cumplimiento legal.</li>
                <li><strong>Axkan prescribe</strong> — Te recomienda herramientas verificadas y estrategias probadas, con enlaces directos y una guía de implementación.</li>
            </ul>
            <p>
                <strong>Importante:</strong> Axkan prescribe, no ejecuta. Te guiamos hacia la solución
                correcta y te empoderamos para implementarla tú mismo.
            </p>

            <h2>¿Qué nos hace diferentes?</h2>

            <h3>🔒 Base de Datos Certificada</h3>
            <p>
                A diferencia de un chatbot que puede &quot;alucinar&quot; herramientas inexistentes, cada herramienta
                en Axkan ha sido verificada manualmente. Incluimos datos reales de costos, nivel de
                seguridad, cumplimiento con GDPR y LFPDPPP, y nivel técnico requerido.
            </p>

            <h3>📊 Estrategias Probadas</h3>
            <p>
                No improvisamos. Nuestras estrategias provienen de fuentes verificadas y expertos
                reconocidos. Cada flujo de trabajo está documentado paso a paso, con las herramientas
                necesarias y la fuente original para que puedas profundizar.
            </p>

            <h3>💰 Transparencia Total</h3>
            <p>
                Axkan participa en programas de afiliación con las herramientas que recomienda.
                Esto significa que si decides adquirir una herramienta a través de nuestros enlaces,
                podemos recibir una comisión — <strong>sin costo adicional para ti</strong>.
                Este modelo nos permite ofrecerte el servicio de consultoría de forma gratuita.
            </p>
            <p>
                Nuestras recomendaciones <strong>jamás</strong> se basan en la existencia de una comisión.
                Se basan en seguridad, costo, facilidad de uso y cumplimiento legal.
            </p>

            <h3>🌐 Cumplimiento Legal</h3>
            <p>
                Cada herramienta recomendada incluye un análisis de cumplimiento con la{' '}
                <strong>Ley Federal de Protección de Datos Personales (LFPDPPP)</strong> de México
                y el <strong>Reglamento General de Protección de Datos (GDPR)</strong> de la UE.
                Si manejas datos sensibles, Axkan filtra las opciones automáticamente.
            </p>

            <h2>Nuestra Filosofía</h2>
            <blockquote>
                <p>&quot;Prescribir, no ejecutar. Empoderar, no reemplazar.&quot;</p>
            </blockquote>
            <p>
                Creemos que la tecnología debe servir como amplificador de las capacidades humanas,
                no como su sustituto. Axkan te da las herramientas y el conocimiento; tú construyes
                la solución.
            </p>

            <h2>Ecosistema</h2>
            <p>
                Axkan es parte del ecosistema <strong>MxWithMe</strong>, una comunidad de emprendedores,
                desarrolladores y creativos que construyen proyectos con tecnología. Los usuarios
                de Axkan pueden publicar sus proyectos en la comunidad MxWithMe para recibir
                retroalimentación y colaborar con otros miembros.
            </p>

            <h2>Contacto</h2>
            <p>
                ¿Tienes preguntas, sugerencias o quieres explorar una colaboración? Escríbenos a:{' '}
                <a href="mailto:hola@mxwithme.com">hola@mxwithme.com</a>
            </p>
        </LegalLayout>
    );
}
