import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import novaLogo from 'assets/images/novaLogo.png';
import { useAccountLayout } from './hooks';

type AccountLayoutProps = {
    bottomLinks?: React.ReactNode;
    children?: React.ReactNode;
};

const AccountLayout = ({ bottomLinks, children }: AccountLayoutProps) => {
    useAccountLayout();
    const { t } = useTranslation();

    return (
        <div className="auth-fluid">
            {/* Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <Card.Body>
                        {/* logo */}
                        <div className="auth-brand text-center text-lg-start">
                            <Link to="/" className="logo">
                                <img src={novaLogo} alt="Logo" height="18" />
                            </Link>
                        </div>

                        {children}

                        {/* footer links */}
                        {bottomLinks}
                    </Card.Body>
                </div>
            </div>

            {/* Auth fluid right content */}
            <div className="auth-fluid-right text-center">
                <div className="auth-user-testimonial">
                    <h2 className="mb-3">Bem-vindo à Intranet</h2>
                    <p className="lead">
                        <i className="mdi mdi-format-quote-open"></i>{' '}
                        Um ambiente seguro para comunicação e gestão da empresa.{' '}
                        <i className="mdi mdi-format-quote-close"></i>
                    </p>
                    <p>Equipe de TI</p>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;
