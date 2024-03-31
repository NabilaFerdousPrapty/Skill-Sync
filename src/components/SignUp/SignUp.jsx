import bg from '../../assets/bg.svg'

const SignUp = () => {
    const handleSignUp=(e)=>{
        e.preventDefault();
        console.log('submitted');
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const address = e.target.address.value;
    
        console.log(email);
        console.log(lastName);
        console.log(firstName);
        console.log(password);
        console.log(address);
    }
    return (
        <div style={{backgroundImage:`url(${bg})`}} className="hero h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
         
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
             <div className="flex justify-between items-center">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input name="firstName" type="firstName" placeholder="firstName" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input name="lastName" type="lastName" placeholder="last name" className="input input-bordered" />
               
              </div>
             </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input name="address" type="address" placeholder="address" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email"  type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  value='resister' type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
