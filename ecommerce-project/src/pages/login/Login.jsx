import { HomeHeader } from "../../components/home/HomeHeader"
import { Footer } from "../../components/common/Footer"
import "./login.css"

export function Login() {
    return (
        <>
            <title>Login</title>
            <HomeHeader />

            <main className="login-page">
                <section className="login-card">
                    <p className="login-kicker">Welcome back</p>
                    <h1>Login</h1>

                    <form className="login-form">
                        <label>
                            <span>Email</span>
                            <input type="email" placeholder="you@example.com" />
                        </label>

                        <label>
                            <span>Password</span>
                            <input type="password" placeholder="Enter your password" />
                        </label>

                        <button type="submit">Sign in</button>
                    </form>

                    <p className="login-footer">
                        Need an account? <a href="#">Create one</a>
                    </p>
                </section>
            </main>

            <Footer />
        </>
    )
}
