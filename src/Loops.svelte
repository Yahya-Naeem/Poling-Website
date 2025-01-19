<script>
    let students = [
        { name: 'John Doe', id: 1, class: '10A', institute: 'Institute A' },
        { name: 'Jane Smith', id: 2, class: '10B', institute: 'Institute B' },
        { name: 'Alice Johnson', id: 3, class: '10C', institute: 'Institute C' },
        { name: 'Bob Brown', id: 4, class: '10D', institute: 'Institute D' },
        { name: 'Charlie Davis', id: 5, class: '10E', institute: 'Institute E' }
    ];

    //delete row
    const handleClick = (id) =>{
        students = students.filter(student=> student.id !== id);
    }
</script>

<main>
    {#each students as student(student.id)}
    <div>
        <h2>{student.name}</h2>
        <p>Class: {student.class}</p>
        <p>Institute: {student.institute}</p>
        <button on:click={()=>handleClick(student.id)}></button>
    </div>
    {:else}
    <p>
        Nothing to show
    </p>
    {/each}
</main>

<style>

</style>