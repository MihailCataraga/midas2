import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SecNavbar from '../components/SecNavbar'
import MiniNavbar from '../components/MiniNavbar'

export default function PrivacyPolicy() {
    return (
        <div className='privacyPolicy'>
            <MiniNavbar path='/privacyPolicy' />
            <Navbar path='/privacyPolicy' />
            <main>
                <SecNavbar page='Privacy Policy' />
                <h1>Privacy policy</h1>
                <p className='privacyPolicyP'>This Privacy Policy explains how we collect, use and protect the personal information of users who visit our site and fill out the contact form to receive more information. By using our site and providing your personal information, you consent to the practices described in this policy.</p>
                <h2>Information collected</h2>
                <p className='privacyPolicyP'>We collect the following personal information from users via the contact form on our website:</p>
                <ul>
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>The message sent by the user</li>
                </ul>
                <p className='privacyPolicyP'>We also collect your IP to provide you with site content in the language representative of your location.</p>
                <p className='privacyPolicyP'>The IP is not used for other purposes and is not disclosed except for the points in "Disclosure of Information".</p>
                <h2>Purpose of information collection</h2>
                <p className='privacyPolicyP'>We use the information collected for the following purposes:</p>
                <ul>
                    <li>To contact you and respond to your requests.</li>
                    <li>To provide you with additional information about our products and services.</li>
                    <li>To improve our services and user experience.</li>
                </ul>
                <h2>Information protection</h2>
                <p className='privacyPolicyP'>We are committed to protecting the personal information of our users. We implement appropriate technical and organizational security measures to prevent unauthorized access, disclosure, alteration or destruction of personal information.</p>
                <h2>Disclosure of Information</h2>
                <p className='privacyPolicyP'>We will not sell, rent, or disclose users' personal information to third parties, except as necessary to comply with our legal obligations or to protect our and other users' rights, property, or safety.</p>
                <p className='privacyPolicyP'>In certain circumstances, we will share personal data with third parties:</p>
                <ul>
                    <li>Competent authorities – in case of requests based on legal provisions, we provide your data to the competent authorities, when this is strictly necessary for the detection of fraud, criminal acts and, in general, when the legal provisions require us to comply with such a requirement.</li>
                    <li>When you expressly ask us to do so or expressly authorize us to disclose your data.</li>
                    <li>In case of urgent situations or cases of force majeure.</li>
                    <li>If the disclosure is necessary to resolve disputes, to ascertain or exercise a right in court.</li>
                </ul>
                <p className='privacyPolicyP'>You can ask us to delete your personal data, but only if it is no longer necessary for the purposes for which it was collected.</p>
                <p className='privacyPolicyP'>We may retain your personal data in the event of establishing, exercising or defending a legal right.</p>
                <p className='privacyPolicyP'>If the retention of your personal data is required for purposes specified by law, we may continue to retain this data.</p>
                <h2>User rights</h2>
                <p className='privacyPolicyP'>Users have the following rights in relation to their personal information:</p>
                <ul>
                    <li>Right of access: You can request access to the personal information we hold about you.</li>
                    <li>Right to erasure: You can request the erasure of your personal information, except where we have a legal obligation to keep it.</li>
                    <li>To exercise these rights, please contact us using the contact details below.</li>
                </ul>
                <h2>Contact</h2>
                <p className='privacyPolicyP'>If you have any questions or concerns about this Privacy Policy or our personal information practices, please contact us:</p>
                <ul>
                    <li>Email: info@midasgroup.works</li>
                    <li>Phone: Phone: + 373 68193004</li>
                </ul>
                <h2>Privacy Policy Updates</h2>
                <p className='privacyPolicyP'>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to periodically review this policy to be informed of how we protect your personal information.</p>
                <p className='privacyPolicyP'>This policy was last updated on 05/20/2024.</p>
            </main>
            <Footer />
        </div>
    )
}
