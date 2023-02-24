import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { use, useState } from 'react'
import { useEffect } from 'react'
import styles from '@/styles/Contact.module.css'
import Navbar from '@/components/Navbar'
import Arrow from '@/components/Arrow'
import ToggleMenu from '@/components/ToggleMenu'




export default function Contact() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })




    const placeholderFirst = "First name here";
    const placeholderLast = "Last name here"
    const placeholderEmail = "Email here"
    const regexName = new RegExp('^[A-Z]{1}[A-Za-z]*$');
    const regexEmail = new RegExp('^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]{2,}$');
    const [firstError, setFirst] = useState('')
    const [lastError, setLast] = useState('')
    const [emailError, setEmail] = useState('')
    const [displayB, setDisplayB] = useState(false)

    let errorMessage;

    useEffect(() => {

        if (formData.firstName !== '' && regexName.test(formData.firstName) == false) {
            setFirst(showError('First'));
        } else {
            setFirst('');
        };

        if (formData.lastName !== '' && regexName.test(formData.lastName) == false) {
            setLast(showError('Last'));
        } else {
            setLast('');
        };

        if (formData.email !== '' && regexEmail.test(formData.email) == false) {
            setEmail('Invalid email');
        } else {
            setEmail('');
        };

        if (regexName.test(formData.firstName) && regexName.test(formData.lastName) && regexEmail.test(formData.email)) {
            setDisplayB(true);
        };
    })


    const showError = (type) => {
        return `${type} name error. First letter must be capital. Must use alphabets only. `
    }

    return (
        <>
            <title>Contact Us</title>
            <meta name="author" content="MDIA 2109"></meta>
            <meta property="og:title" content="Assignment #1 - Contact Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href='/favicon.png' />

            <main className={styles.main}>
                <ToggleMenu />
                <Navbar />
                <header className={styles.heading_section}>
                    <hr className={styles.dividing_lines}></hr>
                    <div className={styles.heading}><h1>Contact Us</h1></div>
                    <hr className={styles.dividing_lines}></hr>
                </header>
                <div className={styles.subheading}>
                    <p >Want to discuss? Let's chat!</p>
                </div>

                <div className={styles.form_section}>
                    <form>
                        <fieldset className={styles.fieldset}>
                            <table>
                                <thead>
                                    <tr >
                                        <th scope="col" className={styles.label}>First Name:</th>
                                        <th scope="col" className={styles.label}>Last Name:</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th >
                                            <input
                                                className={styles.input_field}
                                                id="firstName"
                                                type="text"
                                                name="firstName"
                                                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                                pattern={regexName}
                                                placeholder={placeholderFirst}
                                                minLength="3"
                                                maxLength="25"
                                                required
                                            />
                                        </th>


                                        <th>
                                            <input
                                                className={styles.input_field}
                                                id="lastName"
                                                type="text"
                                                name="lastName"
                                                onChange={(e => setFormData({ ...formData, lastName: e.target.value }))}
                                                pattern={regexName}
                                                placeholder={placeholderLast}
                                                minLength="3"
                                                maxLength="25"
                                                required
                                            />
                                        </th>
                                    </tr>

                                </tbody>
                                <thead>
                                    <tr><th className={styles.label}>Email:</th></tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>
                                            <input
                                                className={styles.input_field}
                                                id="email"
                                                type="text"
                                                name="email"
                                                onChange={(e => setFormData({ ...formData, email: e.target.value }))}
                                                pattern={regexEmail}
                                                title="Email is invalid"
                                                placeholder={placeholderEmail}
                                                minLength="3"
                                                maxLength="50"
                                                required
                                            />
                                        </th>
                                    </tr>
                                </tfoot>


                            </table>

                        </fieldset>
                    </form>
                </div>


                <div className={styles.action_btn}>
                    {
                        displayB ? <button type="submit" id="button" className={styles.button} > Submit</button> : <></>
                    }

                </div>
                <div className={styles.errorMessage}>
                    <h3 className={styles.firstNameError}>{firstError}</h3>
                    <h3 className={styles.lastNameError}>{lastError}</h3>
                    <h3 id="emailError">{emailError}</h3>
                </div>
                <Arrow page="Contact" />
            </main>

        </>
    )
}