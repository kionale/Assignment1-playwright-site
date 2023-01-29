import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { use, useState } from 'react'
import styles from '@/styles/Contact.module.css'

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
            <meta property="og:title" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href='/favicon.png' />

            <main>
                <div><h1>Contact Us</h1></div>

                <div><p>Want to discuss? Let's chat!</p></div>

                <div>
                    <form>
                        <fieldset>
                            <table>
                                <tr>
                                    <label>First Name:</label>
                                    <input
                                        // className={styles.input-form}
                                        type="text"
                                        firstName={firstName}
                                        placeholder={placeholderFirst}
                                        minLength="3"
                                        maxLength="25"
                                        required
                                    />

                                </tr>
                                <tr>
                                    <label>Last Name:</label>
                                    <input
                                        // className={styles.input-form}
                                        type="text"
                                        lastName={lastName}
                                        email={email}
                                        placeholder={placeholderLast}
                                        minLength="3"
                                        maxLength="25"
                                        required
                                    />
                                </tr>
                                {/* <tr>
                                    <label>Email:</label>
                                    <input
                                        // className={styles.input-form}
                                        type="text"
                                        email={email}
                                        placeholder={placeholderEmail}
                                        minLength="3"
                                        maxLength="40"
                                        required
                                    />
                                </tr> */}
                            </table>
                        </fieldset>
                    </form>
                </div>

                <button type="submit"> Submit</button>
            </main>

        </>
    )
}