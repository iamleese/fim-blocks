/*
Deprecated version
*/

import classnames from 'classnames';

const v1 = [
    {
        save({attributes}){
            var embedString = attributes.embedURL;
            var embedID = embedString ? embedString.match(/(?<=id=|d\/)([a-zA-Z0-9\-\_\~\.])+/g) : '';
            

            const classNames = classnames('fim-pdf-embed');

        
            return (
                <div className={classNames} style={{height: '1200px'}}>
                  <iframe
                    src={'https://docs.google.com/viewer?srcid='+embedID+'&amp;pid=explorer&amp;efh=false&amp;a=v&amp;chrome=false&amp;embedded=true'}
                        />
                </div>

            );

        }
    }
]

const v2 = [
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


const v3= [
	{
        save({attributes}){
            var embedString = attributes.embedURL;
            var embedID = embedString ? embedString.match(/(?<=id=|d\/)([a-zA-Z0-9\-\_\~\.])+/g) : '';
            var resourceKey = embedString ? embedString.match(/(?<=resourcekey=)([a-zA-Z0-9\-\_\~\.])+/g) : '';
            var fullscreen = attributes.heightFullscreen ? 'full' : '';
            var frameHeight = attributes.heightFullscreen ? '' : attributes.embedHeight + 'px';
            var setHeight = embedID ? frameHeight : '' ;
            
            const blockProps = useBlockProps.save({
                className: { fullscreen },
                style:  fullscreen ? '' : { height: setHeight } 
            });

        
            return (
                <div {...blockProps}>
                    <iframe src={'https://drive.google.com/file/d/'+embedID+'/preview?resourcekey='+resourceKey}/>
                </div>
            );

        }
       
            
	},
];

export default [v3,v2,v1];