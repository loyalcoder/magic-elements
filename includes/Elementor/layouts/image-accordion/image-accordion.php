<style>
        * {
            box-sizing: border-box;
            font-family: Montserrat, sans-serif;
        }

        body {
            background-color: #343E48;
        }

        h1 {
            text-align: center;
            color: #FFF;
        }

        /* ---- Create Accordion --- */
        .accordion {
            max-width: 1080px;
            height: 250px;
            display: flex;
            overflow: hidden;
            margin: 50px auto;
        }

        .tab {
            position: relative;
            width: 20%;
            height: inherit;
            padding: 20px;
            background: #000;
            color: #FFF;
            cursor: pointer;
            transition: width 0.5s ease;
        }

        .tab img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.5s ease;
        }

        .caption {
            position: absolute;
            z-index: 2;
            white-space: nowrap;
            top: 150px;
            opacity: 0;
        }

        .caption h2 {
            margin-bottom: 2px;
            text-overflow: clip;
            font-size: 24px;
            text-transform: uppercase;
        }

        .caption p {
            margin: 0;
            font-family: 'Open Sans';
            font-size: .9rem;
        }

        /* --- Click Effects --- */
        .tab.active {
            width: 80%;
        }

        .tab.active img {
            opacity: 0.6;
        }

        .tab.active .caption {
            opacity: 1;
        }
    </style>


<h1>Image Accordion</h1>

<div class="accordion">
    <div class="tab">
        <img src="https://images.unsplash.com/photo-1536974735554-66bfa1ede9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        <div class="caption">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
    <div class="tab">
        <img src="https://images.unsplash.com/photo-1460529941229-d92cc936a0d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="">
        <div class="caption">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
    <div class="tab">
        <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        <div class="caption">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
    <div class="tab">
        <img src="https://images.unsplash.com/photo-1537007456227-aed7d59b5800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80" alt="">
        <div class="caption">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
    <div class="tab">
        <img src="https://images.unsplash.com/photo-1422207239328-29f83832206c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1279&q=80" alt="">
        <div class="caption">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
</div>

<script>
    // Add click event listener to each tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');
        });
    });
</script>