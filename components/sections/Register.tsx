import Button from "../shared/Button";

export default function Register() {

    const addEmail =async (formData: FormData) => {
        "use server"
        
        const email = formData.get('email')
    }

    return (
        <section className="bg-custom-blackTextColor py-16">
            <div className="container">
                <div>
                    <h3>Register today and Win 50% off on your first order</h3>
                    <p>We`ll notify you as soon as the app launches in your City/State.</p>
                </div>
                <form action={addEmail}>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                    <Button 
                        name="Register"
                        type="submit"
                    />
                </form>
            </div>
        </section>
    )
}