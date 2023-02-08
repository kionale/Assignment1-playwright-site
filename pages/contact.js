import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { use, useState } from 'react'
import styles from '@/styles/Contact.module.css'
import Navbar from '@/components/Navbar'
import ToggleMenu from '@/components/ToggleMenu'


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
                                                firstName={firstName}
                                                pattern="[A-Z]{1}[a-z]{2,10}"
                                                title="The first letter should be uppercase"
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
                                                lastName={lastName}
                                                pattern="[A-Z]{1}[a-z]{2,10}"
                                                title="The first letter should be uppercase"
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
                                                email={email}
                                                pattern="[/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/"
                                                title="The first letter should be uppercase"
                                                placeholder={placeholderEmail}
                                                minLength="3"
                                                maxLength="40"
                                                required
                                            />
                                        </th>
                                    </tr>
                                </tfoot>

                            </table>

                        </fieldset>
                    </form>
                </div>
               

                {/*  import React, {useState} from "react";
const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
                const [lastName, setLastName] = useState("");
                const [email, setEmail] = useState("");
                const [showSubmit, setShowSubmit] = useState(false);

  const handleFirstNameChange = (event) => {
                    setFirstName(event.target.value);
                checkFormCompletion();
  };

  const handleLastNameChange = (event) => {
                    setLastName(event.target.value);
                checkFormCompletion();
  };

  const handleEmailChange = (event) => {
                    setEmail(event.target.value);
                checkFormCompletion();
  };

  const checkFormCompletion = () => {
    if (firstName && lastName && email) {
                    setShowSubmit(true);
    } else {
                    setShowSubmit(false);
    }
  };

                return (
                <form>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {showSubmit && (
                        <button type="submit">Submit</button>
                    )}
                </form>
                );
};

                export default ContactForm; */}

                {/* <button type="submit" onClick={() => CheckLogin()} className={styles.buttonSubmit}>submit</button> */}
                <button type="submit" className={styles.button} > Submit</button>
            </main>

        </>
    )
}