import React, { Component, PropTypes } from 'react';
import MarkDownElement from '../MarkdownElement/MarkDownElement';
// import transitions from 'material-ui/styles/transitions';
import CodeBlockTitle from './CodeBlockTitle';

const styles = {
  root: {
    background: '#f8f8f8',
    borderTop: 'solid 1px #e0e0e0',
  },
  markdown: {
    overflow: 'auto',
    maxHeight: 1400,
    // transition: transitions.create('max-height', '800ms', '0ms', 'ease-in-out'),
    marginTop: 0,
    marginBottom: 0,
  },
  markdownRetracted: {
    maxHeight: 0,
  },
  description: {
    background: '#ffffff',
    overflow: 'auto',
    padding: '10px 20px 0',
    marginTop: 0,
    marginBottom: 0,
  },
  codeBlockTitle: {
    cursor: 'pointer',
  },
};

class CodeBlock extends Component {
 static propTypes = {
   children: PropTypes.string,
   description: PropTypes.string,
   title: PropTypes.string,
 };

 state = {
   expand: false,
 };

 handleTouchTap = () => {
   this.setState({
     expand: !this.state.expand,
   });
 };

 render() {
   const text = `\`\`\`js
${this.props.children}
    \`\`\``;

   const descriptionStyle = styles.description;
   let codeStyle = Object.assign({}, styles.markdown, styles.markdownRetracted);
   let tooltip = 'Show source';

   if (this.state.expand) {
     codeStyle = styles.markdown;
     tooltip = 'Hide source';
   }

   return (
     <div style={styles.root}>
       <div onTouchTap={this.handleTouchTap} style={styles.codeBlockTitle}>
         <CodeBlockTitle title={this.props.title} tooltip={tooltip} />
       </div>
       <MarkDownElement style={codeStyle} text={text} />
       <MarkDownElement style={descriptionStyle} text={this.props.description} />
     </div>
   );
 }
}

export default CodeBlock;
