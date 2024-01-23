import Link from 'next/link';
import { ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type NextEventProps = ComponentProps & {
};

const NextEvent = (props: NextEventProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  console.log(props);

  return (
    <div className="css-qv2583">
      <div className="css-0">
        <div className="css-zsaq6w">
          <div className="css-cv4t5m">
            <div className="css-tf5qle">
              <p className="css-uby58w">Countdown</p>
              <p className="css-12jh0i1">bis zur nächsten Usergroup</p>
            </div>
          </div>
          <div className="css-1vms0o2">
            <div className="css-1d8k8ed">
              <div className="css-1uepxdb">
                <div className="css-0">
                  <div className="css-gmuwbf">
                    <p className="css-1ltbt96">1</p>
                  </div>
                  <div className="css-gmuwbf">
                    <p className="css-1qpumae">Tag</p>
                  </div>
                </div>
                <div className="css-0">
                  <div className="css-gmuwbf">
                    <p className="css-1ltbt96">15</p>
                  </div>
                  <div className="css-gmuwbf">
                    <p className="css-1qpumae">Stunden</p>
                  </div>
                </div>
                <div className="css-0">
                  <div className="css-gmuwbf">
                    <p className="css-1ltbt96">4</p>
                  </div>
                  <div className="css-gmuwbf">
                    <p className="css-1qpumae">Minuten</p>
                  </div>
                </div>
                <div className="css-0">
                  <div className="css-gmuwbf">
                    <p className="css-1ltbt96">9</p>
                  </div>
                  <div className="css-gmuwbf">
                    <p className="css-1qpumae">Sekunden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = NextEvent;
