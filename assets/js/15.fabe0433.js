(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{227:function(t,e,r){"use strict";r.r(e);var n=r(1),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"dependency-parsing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dependency-parsing"}},[t._v("#")]),t._v(" Dependency parsing")]),t._v(" "),r("p",[t._v('Dependency parsing is the task of extracting a dependency parse of a sentence that represents its grammatical\nstructure and defines the relationships between "head" words and words, which modify those heads.')]),t._v(" "),r("p",[t._v("Example:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("     root\n      |\n      | +-------dobj---------+\n      | |                    |\nnsubj | |   +------det-----+ | +-----nmod------+\n+--+  | |   |              | | |               |\n|  |  | |   |      +-nmod-+| | |      +-case-+ |\n+  |  + |   +      +      || + |      +      | |\nI  prefer  the  morning   flight  through  Denver\n")])])]),r("p",[t._v("Relations among the words are illustrated above the sentence with directed, labeled\narcs from heads to dependents (+ indicates the dependent).")]),t._v(" "),r("h3",{attrs:{id:"penn-treebank"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#penn-treebank"}},[t._v("#")]),t._v(" Penn Treebank")]),t._v(" "),r("p",[t._v("Models are evaluated on the "),r("a",{attrs:{href:"https://nlp.stanford.edu/software/dependencies_manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stanford Dependency"),r("OutboundLink")],1),t._v("\nconversion ("),r("strong",[t._v("v3.3.0")]),t._v(") of the Penn Treebank with "),r("strong",[t._v("predicted")]),t._v(" POS-tags. Punctuation symbols\nare excluded from the evaluation. Evaluation metrics are unlabeled attachment score (UAS) and labeled attachment score (LAS). UAS does not consider the semantic relation (e.g. Subj) used to label the attachment between the head and the child, while LAS requires a semantic correct label for each attachment.Here, we also mention the predicted POS tagging accuracy.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("POS")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("UAS")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("LAS")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Label Attention Layer + HPSG + XLNet (Mrini et al., 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.33")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("96.29")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://khalilmrini.github.io/Label_Attention_Layer.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rethinking Self-Attention: An Interpretable Self-Attentive Encoder-Decoder Parser"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("HPSG Parser (Joint) + XLNet (Zhou and Zhao, 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.20")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("95.72")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/P19-1230",target:"_blank",rel:"noopener noreferrer"}},[t._v("Head-Driven Phrase Structure Grammar Parsing on Penn Treebank"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/DoodleJZ/HPSG-Neural-Parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("HPSG Parser (Joint) + BERT (Zhou and Zhao, 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.00")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("95.43")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/P19-1230",target:"_blank",rel:"noopener noreferrer"}},[t._v("Head-Driven Phrase Structure Grammar Parsing on Penn Treebank"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/DoodleJZ/HPSG-Neural-Parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("CVT + Multi-Task (Clark et al., 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.74")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("96.61")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("95.02")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1809.08370",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semi-Supervised Sequence Modeling with Cross-View Training"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/tensorflow/models/tree/master/research/cvt_text",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Left-to-Right Pointer Network (Fernández-González and Gómez-Rodríguez, 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("96.04")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.43")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/N19-1076/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Left-to-Right Dependency Parsing with Pointer Networks"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/danifg/Left2Right-Pointer-Parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Graph-based parser with GNNs (Ji et al., 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("95.97")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.31")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/P19-1237",target:"_blank",rel:"noopener noreferrer"}},[t._v("Graph-based Dependency Parsing with Graph Neural Networks"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Deep Biaffine (Dozat and Manning, 2017)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("95.74")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.08")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1611.01734",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deep Biaffine Attention for Neural Dependency Parsing"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/tdozat/Parser-v1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("jPTDP (Nguyen and Verspoor, 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.97")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.51")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("92.87")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1807.03955",target:"_blank",rel:"noopener noreferrer"}},[t._v("An improved neural network model for joint POS tagging and dependency parsing"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/datquocnguyen/jPTDP",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Andor et al. (2016)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.44")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.61")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("92.79")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/P16-1231",target:"_blank",rel:"noopener noreferrer"}},[t._v("Globally Normalized Transition-Based Neural Networks"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Distilled neural FOG (Kuncoro et al., 2016)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.26")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("92.06")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1609.07561",target:"_blank",rel:"noopener noreferrer"}},[t._v("Distilling an Ensemble of Greedy Dependency Parsers into One MST Parser"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Distilled transition-based parser (Liu et al., 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.05")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("92.14")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://aclweb.org/anthology/P18-1129",target:"_blank",rel:"noopener noreferrer"}},[t._v("Distilling Knowledge for Search-based Structured Prediction"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/Oneplus/twpipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Weiss et al. (2015)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.44")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("93.99")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("92.05")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://anthology.aclweb.org/P/P15/P15-1032.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Structured Training for Neural Network Transition-Based Parsing"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("BIST transition-based parser (Kiperwasser and Goldberg, 2016)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("93.9")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("91.9")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://aclweb.org/anthology/Q16-1023",target:"_blank",rel:"noopener noreferrer"}},[t._v("Simple and Accurate Dependency Parsing Using Bidirectional LSTM Feature Representations"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/elikip/bist-parser/tree/master/barchybrid/src",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Arc-hybrid (Ballesteros et al., 2016)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("93.56")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("91.42")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1603.03793",target:"_blank",rel:"noopener noreferrer"}},[t._v("Training with Exploration Improves a Greedy Stack-LSTM Parser"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("BIST graph-based parser (Kiperwasser and Goldberg, 2016)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("97.3")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("93.1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("91.0")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://aclweb.org/anthology/Q16-1023",target:"_blank",rel:"noopener noreferrer"}},[t._v("Simple and Accurate Dependency Parsing Using Bidirectional LSTM Feature Representations"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/elikip/bist-parser/tree/master/bmstparser/src",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])])])]),t._v(" "),r("h3",{attrs:{id:"universal-dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#universal-dependencies"}},[t._v("#")]),t._v(" Universal Dependencies")]),t._v(" "),r("p",[t._v("The focus of the task is learning syntactic dependency parsers that can work in a real-world setting, starting from raw text, and that can work over many typologically different languages, even low-resource languages for which there is little or no training data, by exploiting a common syntactic annotation standard. This task has been made possible by the Universal Dependencies initiative (UD, http://universaldependencies.org/), which has developed treebanks for 60+ languages with cross-linguistically consistent annotation and recoverability of the original raw texts.")]),t._v(" "),r("p",[t._v("Participating systems will have to find labeled syntactic dependencies between words, i.e. a syntactic head for each word, and a label classifying the type of the dependency relation. In addition to syntactic dependencies, prediction of morphology and lemmatization will be evaluated. There will be multiple test sets in various languages but all data sets will adhere to the common annotation style of UD. Participants will be asked to parse raw text where no gold-standard pre-processing (tokenization, lemmas, morphology) is available. Data preprocessed by a baseline system (UDPipe, https://ufal.mff.cuni.cz/udpipe/) was provided so that the participants could focus on improving just one part of the processing pipeline. The organizers believed that this made the task reasonably accessible for everyone.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("LAS")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("MLAS")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("BLEX")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Stanford (Qi et al.)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("74.16")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("62.08")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("65.28")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/pdf/1901.10457.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Universal Dependency Parsing from Scratch"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/stanfordnlp/stanfordnlp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("UDPipe Future (Straka)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("73.11")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("61.25")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("64.49")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/K18-2020",target:"_blank",rel:"noopener noreferrer"}},[t._v("UDPipe 2.0 Prototype at CoNLL 2018 UD Shared Task"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/CoNLL-UD-2018/UDPipe-Future",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("HIT-SCIR (Che et al.)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("75.84")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("59.78")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("65.33")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1807.03121",target:"_blank",rel:"noopener noreferrer"}},[t._v("Towards Better UD Parsing: Deep Contextualized Word Embeddings, Ensemble, and Treebank Concatenation"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("TurkuNLP (Kanerva et al.)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("73.28")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("60.99")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("66.09")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://universaldependencies.org/conll18/proceedings/pdf/K18-2013.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Turku Neural Parser Pipeline: An End-to-End System for the CoNLL 2018 Shared Task"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/TurkuNLP/Turku-neural-parser-pipeline",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])])])]),t._v(" "),r("p",[t._v("The following results are just for references:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("UAS")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("LAS")]),t._v(" "),r("th",[t._v("Note")]),t._v(" "),r("th",[t._v("Paper / Source")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Stack-only RNNG (Kuncoro et al., 2017)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("95.8")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.6")]),t._v(" "),r("td",[t._v("Constituent parser")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1611.05774",target:"_blank",rel:"noopener noreferrer"}},[t._v("What Do Recurrent Neural Network Grammars Learn About Syntax?"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Deep Biaffine (Dozat and Manning, 2017)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("95.75")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.22")]),t._v(" "),r("td",[t._v("Stanford conversion "),r("strong",[t._v("v3.5.0")])]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1611.01734",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deep Biaffine Attention for Neural Dependency Parsing"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Semi-supervised LSTM-LM (Choe and Charniak, 2016) (Constituent parser)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("95.9")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("94.1")]),t._v(" "),r("td",[t._v("Constituent parser")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://www.aclweb.org/anthology/D16-1257",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parsing as Language Modeling"),r("OutboundLink")],1)])])])]),t._v(" "),r("h1",{attrs:{id:"cross-lingual-zero-shot-dependency-parsing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cross-lingual-zero-shot-dependency-parsing"}},[t._v("#")]),t._v(" Cross-lingual zero-shot dependency parsing")]),t._v(" "),r("p",[t._v("Cross-lingual zero-shot parsing is the task of inferring the dependency parse of sentences from one language without any labeled training trees for that language.")]),t._v(" "),r("h2",{attrs:{id:"universal-dependency-treebank"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#universal-dependency-treebank"}},[t._v("#")]),t._v(" Universal Dependency Treebank")]),t._v(" "),r("p",[t._v("Models are evaluated against the "),r("a",{attrs:{href:"https://github.com/ryanmcd/uni-dep-tb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Universal Dependency Treebank v2.0"),r("OutboundLink")],1),t._v(". For each of the 6 target languages, models can use the trees of all other languages and English and are evaluated by the UAS and LAS on the target. The final score is the average score across the 6 target languages. The most common evaluation setup is to use\ngold POS-tags.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("UAS")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("LAS")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Cross-Lingual ELMo (Schuster et al., 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("84.2")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("77.3")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1902.09492",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cross-Lingual Alignment of Contextual Word Embeddings, with Applications to Zero-shot Dependency Parsing"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/TalSchuster/CrossLingualELMo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("MALOPA (Ammar et al., 2016)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("70.5")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.transacl.org/ojs/index.php/tacl/article/view/892",target:"_blank",rel:"noopener noreferrer"}},[t._v("Many Languages, One Parser"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/clab/language-universal-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Guo et al. (2016)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("76.7")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("69.9")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://dl.acm.org/citation.cfm?id=3016100.3016284",target:"_blank",rel:"noopener noreferrer"}},[t._v("A representation learning framework for multi-source transfer parsing"),r("OutboundLink")],1)]),t._v(" "),r("td")])])]),t._v(" "),r("h1",{attrs:{id:"unsupervised-dependency-parsing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unsupervised-dependency-parsing"}},[t._v("#")]),t._v(" Unsupervised dependency parsing")]),t._v(" "),r("p",[t._v("Unsupervised dependency parsing is the task of inferring the dependency parse of sentences without any labeled training data.")]),t._v(" "),r("h2",{attrs:{id:"penn-treebank-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#penn-treebank-2"}},[t._v("#")]),t._v(" Penn Treebank")]),t._v(" "),r("p",[t._v("As with supervised parsing, models are evaluated against the Penn Treebank. The most common evaluation setup is to use\ngold POS-tags as input and to evaluate systems using the unlabeled attachment score (also called 'directed dependency\naccuracy').")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("UAS")]),t._v(" "),r("th",[t._v("Paper / Source")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Iterative reranking (Le & Zuidema, 2015)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("66.2")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://www.aclweb.org/anthology/N15-1067",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unsupervised Dependency Parsing - Let’s Use Supervised Parsers"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Combined System (Spitkovsky et al., 2013)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("64.4")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://www.aclweb.org/anthology/D13-1204",target:"_blank",rel:"noopener noreferrer"}},[t._v("Breaking Out of Local Optima with Count Transforms and Model Recombination - A Study in Grammar Induction"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Tree Substitution Grammar DMV (Blunsom & Cohn, 2010)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("55.7")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://www.aclweb.org/anthology/D10-1117",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unsupervised Induction of Tree Substitution Grammars for Dependency Parsing"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Shared Logistic Normal DMV (Cohen & Smith, 2009)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("41.4")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://www.aclweb.org/anthology/N09-1009",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shared Logistic Normal Distributions for Soft Parameter Tying in Unsupervised Grammar Induction"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("DMV (Klein & Manning, 2004)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("35.9")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://www.aclweb.org/anthology/P04-1061",target:"_blank",rel:"noopener noreferrer"}},[t._v("Corpus-Based Induction of Syntactic Structure - Models of Dependency and Constituency"),r("OutboundLink")],1)])])])]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/"}},[t._v("Go back to the README")])],1)])}),[],!1,null,null,null);e.default=a.exports}}]);