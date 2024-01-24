import { ComponentProps } from 'lib/component-props';
import { DateField, Field, ImageField, RichText, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCompass } from '@fortawesome/free-regular-svg-icons'


export type NextEventProps = ComponentProps & {
    fields: {
        Date: {
            value: string
        },
        Title: Field<string>,
        Venue: Field<string>,
        Image: ImageField,
        Blurb: Field<string>
    }
};

const EventPromo = (props: NextEventProps): JSX.Element => {
    const sxaStyles = `${props.params?.styles || ''}`;
    console.log("propity props");
    console.log(props);
    return (
        <div className={`container ${sxaStyles}`}>
            <div className="next-event">
                <div className="next-event-left">
                    <h2><Text field={props.fields.Title} /></h2>
                    <p><FontAwesomeIcon icon={faClock} /> <DateField field={props.fields.Date} render={(date) => date.toDateString() + " @ " + date.toLocaleTimeString('en-CA', { hour: 'numeric', minute: '2-digit' })} /></p>
                    <p><FontAwesomeIcon icon={faCompass} /> <Text field={props.fields.Venue} /></p>
                    <p><Text field={props.fields.Blurb} /></p>

                    <a href="#" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</a>

                </div>
                <div className="next-event-right">
                    <Image field={props.fields.Image} />
                </div>

            </div>
        </div>
    );
};

export const Default = EventPromo;
