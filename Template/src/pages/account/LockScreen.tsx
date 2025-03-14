import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useLockScreen } from './hooks';
import avatar1 from 'assets/images/users/avatar-1.jpg';

export type UserData = {
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {t('Not you? return')}{' '}
                <Link to={'/account/login'} className="text-muted ms-1">
                    <b>{t('Sign In')}</b>
                </Link>
            </p>
        </footer>
    );
};

const LockScreen = () => {
    const { t } = useTranslation();
    const { schemaResolver, onSubmit } = useLockScreen();

    return (
        <AccountLayout bottomLinks={<BottomLink />}>
            <div className="text-center w-75 m-auto">
                <img src={avatar1} height="64" alt="" className="rounded-circle shadow" />
                <h4 className="text-dark-50 text-center mt-3 fw-bold">{t('Hi ! Michael ')}</h4>
                <p className="text-muted mb-4">{t('Enter your password to access the admin.')}</p>
            </div>

            <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
                <FormInput
                    label={t('Password')}
                    type="password"
                    name="password"
                    placeholder={t('Enter your password')}
                    containerClass={'mb-3'}
                />

                <div className="mb-0 text-center d-grid">
                    <Button variant="primary" type="submit">
                        <i className="mdi mdi-login"></i> {t('Log In')}
                    </Button>
                </div>

                {/* social links */}
                <div className="text-center mt-4">
                    <p className="text-muted font-16">{t('Authentication in with')}</p>
                    <ul className="social-list list-inline mt-3">
                        <li className="list-inline-item">
                            <Link to="#" className="social-list-item border-primary text-primary">
                                <i className="mdi mdi-facebook"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" className="social-list-item border-danger text-danger">
                                <i className="mdi mdi-google"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" className="social-list-item border-info text-info">
                                <i className="mdi mdi-twitter"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#" className="social-list-item border-secondary text-secondary">
                                <i className="mdi mdi-github"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </VerticalForm>
        </AccountLayout>
    );
};

export default LockScreen;
