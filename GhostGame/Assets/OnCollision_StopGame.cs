using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OnCollision_StopGame : MonoBehaviour
{
    public string targetObjectName;

    // Start is called before the first frame update
    void Start()
    {
        Time.timeScale = 1;
    }

   void OnCollisionEnter2D(Collision2D collision)
    {
        if(collision.gameObject.name == targetObjectName)
        {
            Time.timeScale = 0;
        }
    }
}
