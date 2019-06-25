import hljs from 'highlight.js';

export const defaultOptions = {
    renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
        hljs
    },
    promptURLs: true,
    toolbar: [
        'bold',
        'italic',
        'strikethrough',
        'heading',
        'code',
        'quote',
        'unordered-list',
        'ordered-list',
        'clean-block',
        'link',
        'image',
        'table',
        'horizontal-rule',
        '|',
        'preview',
        'side-by-side',
        'fullscreen'
    ]
};