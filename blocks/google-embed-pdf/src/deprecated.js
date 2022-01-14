/*
Deprecated version
*/

import classnames from 'classnames';


const deprecated = [
	{
        save({attributes}){
            var embedString = attributes.embedURL;
            var embedID = embedString ? embedString.match(/(?<=id=|d\/)([a-zA-Z0-9\-\_\~\.])+/g) : '';
            var fullscreen = attributes.heightFullscreen ? 'full' : '';
            var frameHeight = attributes.heightFullscreen ? '' : attributes.embedHeight + 'px';
            var setHeight = embedID ? frameHeight + 'px' : '' ;

            const classNames = classnames(
                'fim-pdf-embed',
                fullscreen
            );

        
            return (
                <div className={classNames} style={{height: setHeight}}>
                    <iframe
                            src={'https://docs.google.com/viewer?srcid='+embedID+'&amp;pid=explorer&amp;efh=false&amp;a=v&amp;chrome=false&amp;embedded=true'}
                        />
                </div>
            );

        }
       
            
	},
];

export default deprecated;