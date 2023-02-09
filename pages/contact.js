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
    const regex = new RegExp('^[A-Z]{1}[A-Za-z]*$');
    const regexEmail = new RegExp('^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]{2,}$');

    useEffect(() => {
        console.log(formData.email);
        if (regex.test(formData.firstName)) {
            document.querySelector("#firstNameError").innerText = "";
        } else if (formData.firstName == "") {
            document.querySelector("#firstNameError").innerText = "";
        } else if (formData.firstName !== "" && regex.test(formData.firstName) == false) {
            document.querySelector("#firstNameError").innerText = "First name error. First letter must be capital. Must use alphabets only.";
        };
        if (regex.test(formData.lastName)) {
            document.querySelector("#lastNameError").innerText = "";
        } else if (formData.lastName == "") {
            document.querySelector("#lastNameError").innerText = "";
        } else if (formData.lastName !== "" && regex.test(formData.lastName) == false) {
            document.querySelector("#lastNameError").innerText = "Last name error. First letter must be capital. Must use alphabets only.";
        };
        if (regexEmail.test(formData.email)) {
            document.querySelector("#emailError").innerText = "";
        } else if (formData.email == "") {
            document.querySelector("#emailError").innerText = "";
        } else if (formData.email !== "" && regexEmail.test(formData.email) == false) {
            document.querySelector("#emailError").innerText = "Email is invalid.";
        };
        if (regex.test(formData.firstName) && regex.test(formData.lastName) && regexEmail.test(formData.email)) {
            document.querySelector("#button").style.visibility = "visible";
        } else {
            document.querySelector("#button").style.visibility = "hidden";
        }
    })


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
                                                pattern="[A-Z]{1}[a-z]{2,10}"
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
                                                pattern="[A-Z]{1}[a-z]{2,10}"
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
                                                pattern="^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]{2,}$"
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
                    <Link href="/"><button type="submit" id="button" className={styles.button}> Submit</button></Link>
                </div>
                <div className={styles.errorMessage}>
                    <h3 id="firstNameError"></h3>
                    <h3 id="lastNameError"></h3>
                    <h3 id="emailError"></h3>
                </div>
                <Arrow page="Contact" />
            </main>

        </>
    )
}