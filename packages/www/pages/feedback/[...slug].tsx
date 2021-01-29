import React from 'react';
import Head from 'next/head';
import Container from '../../components/container';
import Layout from '../../components/layout';
import * as Survey from 'survey-react';


const QuestionnairePage: React.FC = () => {

    const defaultThemeColors = Survey
        .StylesManager
        .ThemeColors['default'];
    defaultThemeColors['$main-color'] = '#00b0ee';
    defaultThemeColors['$main-hover-color'] = '#e95c59';
    defaultThemeColors['$text-color'] = '#000000';

    Survey
        .StylesManager
        .applyTheme();

    const questions = {
        completeText: 'Finish',
        pageNextText: 'Continue',
        pagePrevText: 'Previous',
        pages: [
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '1',
                        title: 'What was the location type?',
                        isRequired: true,
                        choices: ['Indoor', 'Outdoor']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '2',
                        title: 'How many people other than you do you estimate were present?',
                        isRequired: true,
                        choices: ['0', '1-5', '5-10', '11+']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '3',
                        title: 'How long did you stay at the location?',
                        isRequired: true,
                        choices: ['5min', '10min', '15min', '20min', '30min', '45min', '1h', '2h', '2h+']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '4',
                        title: 'Were people and staff wearing masks?',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '5',
                        title: 'Were people using the PPE correctly? (e.g. covering both the nose and mouth)',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '6',
                        title: 'Was the staff wearing any form of PPE?',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '7',
                        title: 'Were people following the social distancing rules?',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '8',
                        title: 'Was additional protection put in place? (e.g. one-way systems, walled separators at tills, etc.)',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'text',
                        name: '9',
                        title: 'Can you please describe it in a few words?',
                        isRequired: true,
                        placeHolder: 'Type your answer'
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '10',
                        title: 'How many were in your party?',
                        isRequired: true,
                        choices: ['Just me', '2', '2-4', '4+']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '11',
                        title: 'Were all the members of your party from your household?',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '12',
                        title: 'Were all the members from your support bubble?',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'checkbox',
                        name: '13',
                        title: 'How was the air flow? (select all that apply)',
                        isRequired: true,
                        choices: ['Well ventilated (doors or windows open, large inside space e.g. museums, etc.)', 'Air conditioning or heating was present and very likely to be working', 'The air was circulating a lot', 'Confined space with no apparent ventilation']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '14',
                        title: 'Were the surfaces cleaned after every usage?',
                        isRequired: true,
                        choices: ['Yes', 'No', 'Often but not after every usage']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '15',
                        title: 'Did any contact between members of the party occur during the gathering?',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '16',
                        title: 'Did it involve singing or physical activities?',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            }
        ]
    };

    return (
        <Layout>
            <Head>
                <title>Moai Questionnaire</title>
            </Head>
            <Container>
                <section className="mt-20 mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-7xl tracking-tighter leading-tight md:pr-8 text-center">
                        Questionnaire
                    </h1>
                </section>
                <Survey.Survey json={questions} />
            </Container>
        </Layout>
    );
};

export default QuestionnairePage;
