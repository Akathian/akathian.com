import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }
  education = [
    {
      name: "Fall 2017",
      courses: [
        {
          name: "Life on Earth: Unifying Principles",
          code: "BIOA01",
          grade: "",
          topics: [
            'Evolution', 'Cell Biology', 'Genetics'
          ]
        },
        {
          name: "Introductory Chemistry I: Structure and Bonding",
          code: "CHMA10",
          grade: "",
          topics: [
            'Chemical Reactions and Stoichiometry', 'Gases', 'Liquids, Solids and  Intermolecular forces', 'Solutions', 'The Quantum-Mechanical Model of the Atom', 'Periodic Properties of the Elements', 'Lewis Theory, Molecular Shapes, Valence Bond Theory and Molecular Orbital Theory', 'Radioactivity and Nuclear Chemistry'
          ]
        },
        {
          name: "Introduction to Computer Science I",
          code: "CSCA08",
          grade: "",
          topics: [
            'Basic Python', 'Iterative Loops', 'Object-Oriented Programming', 'Abstraction/Encapsulation', 'Unit Testing'
          ]
        },
        {
          name: "Discrete Mathematics",
          code: "CSCA67",
          grade: "",
          topics: [
            'Direct Proofs',
            'Indirect Proofs(Contradiction, Contrapositive)',
            'Induction(Simple, Strong)',
            'Combinatorics',
            'Basic Probability',
          ]
        },
        {
          name: "Calculus I for Mathematical Sciences",
          code: "MATA31",
          grade: "",
          topics: [
            'Functions',
            'Limits',
            'Continuity and its consequences',
            'Derivatives and their applications',
          ]
        }
      ]
    },
    {
      name: "Winter 2018",
      courses: [
        {
          name: "Life on Earth: Form, Function and Interactions",
          code: "BIOA02",
          grade: "",
          topics: [
            'Plant Form and Function',
            'Animal Form and Function',
            'Ecology',
          ]
        },
        {
          name: "Introductory Chemistry II: Reactions and Mechanisms",
          code: "CHMA11",
          grade: "",
          topics: [
            "Dynamic Chemical Equilibrium",
            'Acid - Base Equilibria in Aqueous Solution',
            'Aqueous Ionic Equilibria',
            'Gibbs Energy and Thermodynamics',
            'Electrochemistry',
            'Chemical Kinetics'
          ]
        },
        {
          name: "Introduction to Computer Science II",
          code: "CSCA48",
          grade: "",
          topics: [
            'Python Data Structures',
            'Stacks / Queues',
            'Linked Lists',
            'Trees',
            'Heaps',
            'Recursion',
            'Basic Sorting Algorithms',
          ]
        },
        {
          name: "Calculus II for Mathematical Sciences",
          code: "MATA37",
          grade: "",
          topics: [
            'Riemann Sums',
            'Integration Techniques',
            'Evaluating Series',
            'Proving convergence/divergence for series and sequences'
          ]
        }
      ]
    },
    {
      name: "Summer 2018",
      courses: [
        {
          name: "Cell Biology",
          code: "BIOB10",
          grade: "",
          topics: [
            'Prokaryotes/Eukaryotes',
            'Biological Macromolecules/ Protein Functions & Sorting',
            'Cytoplasmic Membrane Systems',
            'Plasma Membrane',
            'Endocytosis/Phagocytosis',
            'Mitochondria',
          ]
        },
        {
          name: "Molecular Aspects of Cellular and Genetic Processes",
          code: "BIOB11",
          grade: "",
          topics: [
            'The genome: chromosomes, genes, DNA, stability, heredity, transposable elements',
            'Prokaryotic / Eukaryotic RNA synthesis', ,
            'RNA processing',
            'Protein synthesis',
            'Control of Gene expression',
            'DNA replication / repair',
            'Cancer; tumor suppressors, proto - oncogenes',
            'Signal transduction',
          ]
        },
        {
          name: "Cell and Molecular Biology Laboratory",
          code: "BIOB12",
          grade: "",
          topics: [
            'Spectrophotometry and protein assays',
            'Growth and enumeration of bacteria',
            'Preparation of competent cells, transformation with plasmids',
            'Restriction enzyme analysis',
            'Agarose gel analysis',
            'Lac operon Gene regulation experiments',
            'Data analysis of SDS-PAGE',
            'Microscopy',
          ]
        },
        {
          name: "Ancient Mythology I: Mesopotamia and Egypt",
          code: "CLAA05",
          grade: "",
          topics: [
            'Elective Course'
          ]
        },
        {
          name: "Linear Algebra I for Mathematical Sciences",
          code: "MATA22",
          grade: "",
          topics: [
            'Vectors',
            'Linear Systems and Matrices',
            'Subspaces',
            'Linear Transformations',
            'Determinants',
            'Diagonalization'
          ]
        }
      ]
    },
    {
      name: "Fall 2018",
      courses: [
        {
          name: "Software Design",
          code: "CSCB07",
          grade: "",
          topics: [
            'Java',
            'Eclipse',
            'SVN',
            'Object-Oriented Programming (OOP)',
            'Agile Scrum Methodologies',
            'Software Development Process',
            'Design Patterns',
            'Builder',
            'Decorator',
            'Dependency Injection',
            'Factory method',
            'Iterator',
            'Liskov',
            'Singleton',
            'SRP',
            'JUnit Testing'
          ]
        },
        {
          name: "Introduction to the Theory of Computation",
          code: "CSCB36",
          grade: "",
          topics: [
            'Induction Proofs',
            "Program Correctness",
            'Propositional/Predicate Logic',
            'Regular Expressions',
            '(Non) Determinate Finite-state Automata',
            'Context-free Grammars',
            'Push-down Automata'
          ]
        },
        {
          name: "Linear Algebra II",
          code: "MATB24",
          grade: "",
          topics: [
            'Vector Spaces over Fields',
            'Coordinatization',
            'Change of Basis',
            'Inner Product Spaces',
            'Hamming Code(Error correcting code)',
            'Areas, volume, cross products',
            'Projections/Gram-Shmidt process',
            'Orthogonal Matrices',
            'Least squares',
            'Matrices and vector spaces over complex numbers',
            'Eigenvalues, diagonalization, Jordan canonical form'
          ]
        },
      ]
    },
    {
      name: "Winter 2019",
      courses: [
        {
          name: "Software Tools and Systems Programming",
          code: "CSCB09",
          grade: "",
          topics: [
            'Shell Scripting',
            'C',
            'Makefiles',
            'File/Binary I/O',
            'Forks, Pipes, Exec',
            'Signals',
            'Sockets',
            'Select'
          ]
        },
        {
          name: "Introduction to Databases and Web applications",
          code: "CSCB20",
          grade: "",
          topics: [
            'Relational Algebra',
            'SQLite',
            'Python (Flask)',
            'HTML',
            'CSS',
            'Javascript',
            'JQuery'
          ]
        },
        {
          name: "Computer Organization",
          code: "CSCB58",
          grade: "",
          topics: [
            'Basic Circuits',
            'Karnaugh Maps',
            'Combinatorial/Sequential Circuits',
            'Booth\'s Algorithm',
            'Finite-state Machines',
            'Verilog',
            'MIPS Assembly'
          ]
        },
        {
          name: "Introduction to Clinical, Developmental, Personality and Social Psychology",
          code: "PSYA02",
          grade: "",
          topics: [
            'Lifespan Development',
            'Personality',
            'Intelligence Testing',
            'Motivation/Emotion',
            'Social Psychology',
            'Health/Stress',
            'Psychological Disoders & Therapies'
          ]
        },
      ]
    },
    {
      name: "Summer 2019",
      courses: [
        {
          name: "Design and Analysis of Data Structures",
          code: "CSCB63",
          grade: "",
          topics: [
            'Worst Case Complexity',
            'AVL, Intervel, Augmented Trees',
            'AVL Tree Union, Intersect',
            'Heaps',
            'Graph Search Algorithms',
            'Minimum Spanning Trees',
            'Strongly Connected Component',
            "Dijkstra's Algorithm",
            'Amortized Analysis',
            'Potential Method',
            'Disjoint Sets',
            'Fibonacci Heaps',
            'Probability and Expected Case Analysis',
            'Hashing'
          ]
        },
        {
          name: "Introduction to Linguistics",
          code: "LINA01",
          grade: "",
          topics: [
            "Elective Course"
          ]
        },
        {
          name: "Techniques for Calculus of Several Variables",
          code: "MATB41",
          grade: "",
          topics: [
            'Partial derivatives', 'Gradient', 'Tangent Plane', 'Jacobian Matrix and Chain Rule', 'Taylor series', 'Extremal Problems', 'Extremal Problems with Constraints and Lagrange Multipliers', 'Multiple Integral', 'Spherical and Cylindrical Coordinates', 'Law of Transformation of Variables'
          ]
        },
        {
          name: "Introduction to Biological and Cognitive Psychology",
          code: "PSYA01",
          grade: "",
          topics: [
            "Research Techniques in Psychology", 'Evolutionary Psychology', 'The Biology of Behaviour', 'Learning and Behaviour', 'Sensation', 'Perception', 'Memory and Consciousness'
          ]
        },
        {
          name: "An Introduction to Probability",
          code: "STAB52",
          grade: "",
          topics: [
            'The Probability Model', 'Density and Distribution Functions', 'Computer Generation of Random Variables', 'Conditional Probability', 'Expectation', 'Sampling Distributions', 'Weak Law of Large Numbers', 'Central Limit Theorem', 'Poisson Processes'
          ]
        },
      ]
    },
    {
      name: "Fall 2019",
      courses: [
        {
          name: "Introduction to Cognitive Neuroscience",
          code: "PSYB55",
          grade: "",
          topics: [
            'Neurotransmission and Neuroanatomy',
            'Methods in Cognitive Neuroscience',
            'Perception',
            'Object Recognition',
            'Attention',
            'Action',
            'Memory',
            'Emotion',
            'Language',
            'Cognitive Control'
          ]
        },
        {
          name: "COOP",
          code: "",
          grade: "",
          topics: [
          ]
        }
      ]
    },
    {
      name: "Winter 2020",
      courses: [
        {
          name: "Introduction to Clinical Psychology",
          code: "PSYB32",
          grade: "",
          topics: [
            'Clinical Assessment, Classification and Diagnosis',
            'Research Methods in the Study of Abnormal Behaviour',
            'Anxiety Disorders',
            'Somatic Symptom Disorders and Dissociative Disorders',
            'Mood Disorders and Suicide',
            'Eating Disorders',
            'Schizophrenia',
            'Personality Disorders',
            'Aging and Psychological Disorders'
          ]
        },
        {
          name: "COOP",
          code: "",
          grade: "",
          topics: [

          ]
        }
      ]
    },
    {
      name: "Summer 2020",
      courses: [
        {
          name: "Principles of Programming Languages",
          code: "CSCC24",
          grade: "",
          topics: [
            'Haskell Basics',
            'Lazy Evaluation',
            'foldr and foldl',
            'Functors, Applicatives and Monads',
            'State Monad',
            'Dependency Injection',
            'CFGs and Syntax',
            'Parsing',
            'Semantics'

          ]
        },
        {
          name: "Operating Systems",
          code: "CSCC69",
          grade: "",
          topics: [
            'PintOS Bootstrapping, Threads, User Programs, Virtual Memory and File Systems',
            'Managing and Scheduling Processes',
            'Threads and Synchronization',
            'Concurrency Problems',
            'Virtual Memory',
            'Memory Management',
            'I/O and Disks',
            'File Systems',
            'Advanced File Systems',
            'Virtualization',
            'Distributed Systems amd Mobile OS',
            'Protection and Security'
          ]
        },
        {
          name: "Neuroanatomy Laboratory",
          code: "NROB60",
          grade: "",
          topics: [
            'Structure of the Nervous System',
            'Development of the Nervous System',
            'Cortical Function & Brain Cells',
            'Resting Membrane Potential',
            'Action Potential',
            'Principals of Synaptic Integration and Chemical Synaptic Transmission',
            'Neurotransmitter Systems',
            'Hippocampus',
            'Cerebellum & Basal Ganglia',
            'Sheep Brain Analysis and Dissection'
          ]
        },
      ]
    },
    {
      name: "Fall 2020",
      courses: [
        {
          name: "Introduction to Numerical Algorithms for Computational Mathematics",
          code: "CSCC37",
          grade: "",
          topics: [
          ]
        },
        {
          name: "Algorithm Design and Analysis",
          code: "CSCC73",
          grade: "",
          topics: [
            'Greedy Algorithms',
            'Divide & Conquer (D&C) Algorithms',
            'Dynamic programming (DP)',
            'Maximum Flow & Applications',
            'Linear Programming (LP)',
            'Approximation algorithms'
          ]
        },
        {
          name: "Computer and Network Security",
          code: "CSCD27",
          grade: "",
          topics: [
            'Classical Cryptography',
            'Symmetric Cryptography, Hash Functions and Protocols',
            'Public-key Cryptography, Digital Signatures and Protocols',
            'Network Insecurity',
            'Network Security',
            'Authentication and Authorization',
            'OS and Program Insecurity',
            'Protection',
            'Malicious Software',
            'Web Security',
            'Social Engineering'
          ]
        },
        {
          name: "Neuroethology",
          code: "NROC34",
          grade: "",
          topics: [
            'Central pattern generation: Stomatogastric ganglion (STG)',
            'Modulation / Vision: Pattern Learning in Bees',
            'Vision: Pattern II / Motion Vision',
            'Birdsong',
            'Hearing in Insects',
            'Chemosensation: Olfaction Drosophila, Chemotaxis in C. elegans',
            'Prey-Capture',
            'Predator avoidance zebrafish'

          ]
        },
        {
          name: "Synaptic Organization and Physiology of the Brain",
          code: "NROC69",
          grade: "",
          topics: [
            'Organizational Principles of the Mammalian Brain',
            'Pre-Synaptic and Post-Synaptic Mechanisms of Neurotransmission',
            'Synaptic Integration and Neuromodulation',
            'Basic and Cutting Edge Techniques in Cellular Neuroscience',
            'Synaptic Organization of the Basal Ganglia, Thalamus, Hippocampus and Neocortex',
            'Synaptic Plasticity and Learning',
            'Synapses in Networks: Network Oscillations'
          ]
        },
      ]
    },
  ]
  ngOnInit() {
  }

}
