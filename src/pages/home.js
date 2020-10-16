import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';

export default function HOME() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                    Unlimited entertainment. <br />50% off your first 2 months.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel any time.
                    </Feature.SubTitle>
                
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership
                        </OptForm.Text>
                    </OptForm>

                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
            
        </>
    );
};