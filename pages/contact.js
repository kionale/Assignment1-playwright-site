import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { use, useState } from 'react'
import styles from '@/styles/Contact.module.css'
import Navbar from '@/components/Navbar'

export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const placeholderFirst = "First name here";
    const placeholderLast = "Last name here"
    const placeholderEmail = "Email here"

    return (
        <>
            <title>Contact Us</title>
            <meta name="author" content="MDIA 2109"></meta>
            <meta property="og:title" content="Assignment #1 - Contact Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href='/favicon.png' />

            <main className={styles.main}>
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
                                        <td >
                                            <input
                                                className={styles.input_field}
                                                id="firstName"
                                                type="text"
                                                firstName={firstName}
                                                placeholder={placeholderFirst}
                                                minLength="3"
                                                maxLength="25"
                                                required
                                            />
                                        </td>

                                        <td>
                                            <input
                                                className={styles.input_field}
                                                id="lastName"
                                                type="text"
                                                lastName={lastName}
                                                email={email}
                                                placeholder={placeholderLast}
                                                minLength="3"
                                                maxLength="25"
                                                required
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr><th className={styles.label}>Email:</th></tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <td>
                                            <input
                                                className={styles.input_field}
                                                id="email"
                                                type="text"
                                                email={email}
                                                placeholder={placeholderEmail}
                                                minLength="3"
                                                maxLength="40"
                                                required
                                            />
                                        </td>
                                    </tr>
                                </tfoot>

                            </table>

                        </fieldset>
                    </form>
                </div>

                <button type="submit" className={styles.button} > Submit</button>
            </main>

        </>
    )
}