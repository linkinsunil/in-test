import './Login.css';

export default function Login() {
  return (
    <div className='form flex flex-col flex-center'>
      <div className='flex flex-col flex-center'>
        <p>sunil@digio.in uses Gmail?</p>
        <p>login using Google!</p>
        <button className='btn google-color'>Google</button>
      </div>

      <h3 className='option-separator'>OR</h3>

      <form className='flex flex-col'>
        <div className='flex flex-col'>
          <label>Proceed with your email address</label>
          <input
            type='email'
            name='email'
            id='user-email'
            placeholder='sunil@digio.in'
          />
        </div>

        <small>
          By Continuing, I Confirm To The Terms and Service and Privacy Policy
          of Digio.in
        </small>

        <button className='btn brand-color'>CONTINUE</button>
      </form>
    </div>
  );
}
