import React from 'react'
import FooterRu from '../components/FooterRu'
import NavbarRu from '../components/NavbarRu'
import SecNavbarRu from '../components/SecNavbarRu'
import MiniNavbarRu from '../components/MiniNavbarRu'

export default function PrivacyPolicyRu() {
    return (
        <div className='privacyPolicy'>
            <MiniNavbarRu path='/privacyPolicy' />
            <NavbarRu path='/privacyPolicy' />
            <main>
                <SecNavbarRu page='Политика конфиденциальности' />
                <h1>Политика конфиденциальности</h1>
                <p className='privacyPolicyP'>В настоящей Политике конфиденциальности объясняется, как мы собираем, используем и защищаем личную информацию пользователей, которые посещают наш сайт и заполняют контактную форму для получения дополнительной информации. Используя наш сайт и предоставляя свою личную информацию, вы соглашаетесь на действия, описанные в этой политике.</p>
                <h2>Собранная информация</h2>
                <p className='privacyPolicyP'>Мы собираем следующую личную информацию от пользователей через контактную форму на нашем сайте:</p>
                <ul>
                    <li>Имя</li>
                    <li>Номер телефона</li>
                    <li>Адрес электронной почты</li>
                    <li>Сообщение, отправленное пользователем</li>
                </ul>
                <p className='privacyPolicyP'>Мы также собираем ваш IP-адрес, чтобы предоставить вам контент сайта на языке вашего местоположения.</p>
                <p className='privacyPolicyP'>ИП не используется для иных целей и не разглашается, за исключением пунктов «Раскрытие информации».</p>
                <h2>Цель сбора информации</h2>
                <p className='privacyPolicyP'>Мы используем собранную информацию для следующих целей:</p>
                <ul>
                    <li>Чтобы связаться с вами и ответить на ваши запросы.</li>
                    <li>Чтобы предоставить вам дополнительную информацию о наших продуктах и ​​услугах.</li>
                    <li>Для улучшения наших услуг и пользовательского опыта.</li>
                </ul>
                <h2>Защита информации</h2>
                <p className='privacyPolicyP'>Мы стремимся защищать личную информацию наших пользователей. Мы реализуем соответствующие технические и организационные меры безопасности для предотвращения несанкционированного доступа, раскрытия, изменения или уничтожения личной информации.</p>
                <h2>Раскрытие информации</h2>
                <p className='privacyPolicyP'>Мы не будем продавать, сдавать в аренду или раскрывать личную информацию пользователей третьим лицам, за исключением случаев, когда это необходимо для соблюдения наших юридических обязательств или для защиты прав, собственности или безопасности наших и других пользователей.</p>
                <p className='privacyPolicyP'>В определенных обстоятельствах мы передаем персональные данные третьим лицам:</p>
                <ul>
                    <li>Компетентные органы – в случае запросов, основанных на положениях законодательства, мы предоставляем ваши данные компетентным органам, когда это строго необходимо для выявления мошенничества, преступных действий и, в целом, когда положения законодательства требуют от нас соблюдения таких требований. требование.</li>
                    <li>Когда вы прямо просите нас об этом или прямо разрешаете нам раскрыть ваши данные.</li>
                    <li>В случае неотложных ситуаций или форс-мажорных обстоятельств.</li>
                    <li>Если раскрытие информации необходимо для разрешения споров, установления или реализации права в суде.</li>
                </ul>
                <p className='privacyPolicyP'>Вы можете попросить нас удалить ваши персональные данные, но только если они больше не нужны для целей, для которых они были собраны.</p>
                <p className='privacyPolicyP'>Мы можем сохранить ваши персональные данные в случае установления, осуществления или защиты законного права.</p>
                <p className='privacyPolicyP'>Если сохранение ваших личных данных требуется для целей, предусмотренных законом, мы можем продолжать хранить эти данные.</p>
                <h2>Права пользователя</h2>
                <p className='privacyPolicyP'>Пользователи имеют следующие права в отношении своей личной информации:</p>
                <ul>
                    <li>Право доступа: вы можете запросить доступ к личной информации, которую мы храним о вас.</li>
                    <li>Право на удаление: вы можете запросить удаление вашей личной информации, за исключением случаев, когда у нас есть юридическое обязательство хранить ее.</li>
                    <li>Чтобы воспользоваться этими правами, свяжитесь с нами, используя контактную информацию ниже.</li>
                </ul>
                <h2>Контакт</h2>
                <p className='privacyPolicyP'>Если у вас есть какие-либо вопросы или сомнения по поводу настоящей Политики конфиденциальности или нашей практики обработки персональных данных, свяжитесь с нами:</p>
                <ul>
                    <li>Электронная почта: info@midasgroup.works</li>
                    <li>Телефон: Телефон: + 373 68193004</li>
                </ul>
                <h2>Обновления политики конфиденциальности</h2>
                <p className='privacyPolicyP'>Мы можем время от времени обновлять настоящую Политику конфиденциальности, чтобы отражать изменения в нашей практике или по другим операционным, юридическим или нормативным причинам. Мы сообщим вам о любых изменениях, разместив новую Политику конфиденциальности на этой странице. Мы рекомендуем вам периодически просматривать эту политику, чтобы быть в курсе того, как мы защищаем вашу личную информацию.</p>
                <p className='privacyPolicyP'>Данная политика последний раз обновлялась 20 мая 2024 г.</p>
            </main>
            <FooterRu path='/ru' />
        </div>
    )
}
