import React, { useEffect } from 'react';
import Head from 'next/head';
import Container from '../../components/container';
import Layout from '../../components/layout';
import * as Survey from 'survey-react';


const QuestionnairePage: React.FC = () => {

    useEffect(() => {
        const defaultThemeColors = Survey
            .StylesManager
            .ThemeColors['default'];
        defaultThemeColors['$main-color'] = '#00b0ee';
        defaultThemeColors['$main-hover-color'] = '#e95c59';
        defaultThemeColors['$text-color'] = '#000000';

        Survey
            .StylesManager
            .applyTheme();
    }, []);

    const questions = {
        completeText: 'Finish',
        pageNextText: 'Continue',
        pagePrevText: 'Previous',
        pages: [
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '0',
                        title: 'Do you know the type of the venue that you visited?',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: 'noVenue',
                        title: 'Without a known venue type, we cannot go forward with the questionnaire. Thank you.',
                        visible: false,
                        visibleIf: '{0} = \'No\''
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: 'venue',
                        title: 'Please select the venue type',
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
                        isRequired: true,
                        choices: [
                            'Accommodation. For example, bed and breakfasts and campsites',
                            'Childcare in public and private settings',
                            'Education including universities',
                            'Events and conference space',
                            'Finance and professional service. For example, high street banks and real estate agencies',
                            'Medical facility. For example, hospitals, GP practices and veterinary clinics',
                            'Non-residential institution. For example, community centres, libraries, crematoria and funeral homes',
                            'Office location and workspace',
                            'Personal care. For example, hair salons and barbers, spas and beauty salons',
                            'Place of worship. For example, churches, synagogues, mosques, temples and meeting rooms',
                            'Private event',
                            'Recreation and leisure. For example, cinemas, theatres, museums and galleries',
                            'Rental / hire locations',
                            'Residential care. For example, care and nursing homes',
                            'Restaurant, cafe, pub or bar',
                            'Retail shops',
                            'Sports and fitness facilities. For example, gyms, indoor sports facilities, swimming pools',
                            'Transport for example, taxis and waiting rooms',
                            'Other'
                        ]
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '1',
                        title: 'What was the location type?',
                        visible: false,
                        visibleIf: '{0} = \'Yes\' and {venue} = \'Non-residential institution. For example, community centres, libraries, crematoria and funeral homes\' or {venue} = \'Rental / hire locations\' or {venue} = \'Other\' or {venue} = \'Restaurant, cafe, pub or bar\' or {venue} = \'Sports and fitness facilities. For example, gyms, indoor sports facilities, swimming pools\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\' and {4} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\' and {4} = \'No\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\' and {8} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\' and {11} = \'No\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\' and {venue} = \'Restaurant, cafe, pub or bar\' or {venue} = \'Sports and fitness facilities. For example, gyms, indoor sports facilities, swimming pools\' or {venue} = \'Accommodation. For example, bed and breakfasts and campsites\' or {venue} = \'Finance and professional service. For example, high street banks and real estate agencies\' or {venue} = \'Place of worship. For example, churches, synagogues, mosques, temples and meeting rooms\' or {venue} = \'Transport for example, taxis and waiting rooms\' or {venue} = \'Events and conference space\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\' and {venue} = \'Events and conference space\'',
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
                        visible: false,
                        visibleIf: '{0} = \'Yes\' and {venue} = \'Events and conference space\'',
                        isRequired: true,
                        choices: ['Yes', 'No']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '17',
                        title: 'How was the temperature in the venue?',
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
                        isRequired: true,
                        choices: ['Felt warm (above 25 degrees Celsius)', 'Normal room temperature (between 20 and 25 degrees Celsius)', 'Felt cold (below 19 degrees Celsius)']
                    }
                ]
            },
            {
                questions: [
                    {
                        type: 'radiogroup',
                        name: '18',
                        title: 'How was the humidity in the venue?',
                        visible: false,
                        visibleIf: '{0} = \'Yes\'',
                        isRequired: true,
                        choices: ['Identical to outside', 'Dryer than outside', 'More humid than outside']
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
