import { ComponentProps } from 'lib/component-props';
import { DateField, Field, ImageField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCompass } from '@fortawesome/free-regular-svg-icons'


export type EventPromoProps = ComponentProps & {
    fields: {
        data: {
            item: {
                Date: {
                    jsonValue: Field<string>
                },
                Title: Field<string>,
                Venue: Field<string>,
                Image: {
                    jsonValue: ImageField
                },
                Blurb: Field<string>
            }
        }
    }
};

const EventPromo = (props: EventPromoProps): JSX.Element => {
    const sxaStyles = `${props.params?.styles || ''}`;

    console.log(props);
    return (
        <div className={`container ${sxaStyles}`}>
            <div className="shadow-2xl grid grid-cols-3 gap-4">
                <div className="pl-4">
                    <h2 className="text-3xl"><Text field={props.fields.data.item.Title} /></h2>
                    <p><FontAwesomeIcon icon={faClock} /> <DateField field={props.fields.data.item.Date.jsonValue} render={(date) => date.toDateString() + " @ " + date.toLocaleTimeString('en-CA', { hour: 'numeric', minute: '2-digit' })} /></p>
                    <p><FontAwesomeIcon icon={faCompass} /> <Text field={props.fields.data.item.Venue} /></p>
                    <p><Text field={props.fields.data.item.Blurb} /></p>

                    <a href="#" className="float-right align-bottom inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-colors-blue-700 rounded-lg hover:bg-colors-blue-800 focus:ring-4 focus:outline-none focus:ring-colors-blue-300 dark:bg-colors-blue-600 dark:hover:bg-colors-blue-700 dark:focus:ring-colors-blue-800">Register</a>
                </div>
                <div className="col-span-2">
                    <Image field={props.fields.data.item.Image.jsonValue} />
                </div>

            </div>
        </div>
    );
};

export const Default = EventPromo;
