import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';

class Login extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageHeader 
                    pageTitle="Login" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Login" 
                />

                <div className="container">
                    <div className="form-content">
                        <div className="form-header">
                            <h3>Login</h3>
                            <p>If you have an account with us, please log in.</p>
                        </div>
                        
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="your-email" 
                                    placeholder="Your email" 
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="your-password" 
                                    placeholder="Your password" 
                                />
                            </div>
    
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group form-check">
                                        <input 
                                            type="checkbox" 
                                            className="form-check-input" 
                                            id="exampleCheck1" 
                                        />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                </div>

                                <div className="col-6 text-right">
                                    <Link href="/reset-password">
                                        <a className="form-link right">Forgot password?</a>
                                    </Link>
                                </div>
                            </div>
    
                            <button type="submit" className="default-btn">Login</button>
                        </form>

                        <div className="form-footer">
                            <p>
                                Don’t have an account? 
                                <Link href="/signup">
                                    <a className="form-link">Signup</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default Login;